/* eslint-disable no-unused-vars */
import { createSession, finalize, getUser, UserType } from "api/loginServices"
import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react"

export interface AuthContextType {
  user: UserType

  signin: (
    email: string,
    password: string,
    setError: VoidFunction,
    callback: VoidFunction,
  ) => void

  // eslint-disable-next-line no-unused-vars
  signout: (callback?: VoidFunction) => void
  isChecking: boolean
}

// sss
export const AuthContext = createContext<AuthContextType>({
  user: { nome: "", email: "" },
  signin: () => false,
  signout: () => false,
  isChecking: true,
})

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserType>({ nome: "", email: "" })
  const [isChecking, setIsChecking] = useState<boolean>(true)

  useEffect(() => {
    const check = async () => {
      try {
        const { data } = await getUser()
        setUser({ ...data })
      } catch (err) {
        console.error(err)
      }
      setIsChecking(false)
    }
    check()
  }, [])

  const signin = useCallback(
    async (
      email: string,
      password: string,
      setError: VoidFunction,
      callback: VoidFunction,
    ) => {
      try {
        const { data } = await createSession(email, password)
        setUser({ ...data })
        callback()
      } catch (err) {
        setUser({ nome: "", email: "" })
        console.error(err)
        setError()
      }
    },
    [],
  )

  const signout = useCallback(async (callback?: VoidFunction) => {
    setUser({ nome: "", email: "" })
    try {
      await finalize()
    } catch (err) {
      console.error(err)
    }
    if (callback) {
      callback()
    }
  }, [])

  const value = useMemo(
    () => ({ user, signin, signout, isChecking }),
    [user, signin, signout, isChecking],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
