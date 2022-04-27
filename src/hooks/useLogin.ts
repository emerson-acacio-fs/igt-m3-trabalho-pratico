import { AuthContextType } from "components/AuthProvider"
import { Dispatch, FormEvent, SetStateAction, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "./useAuth"

interface UseLoginResponseType {
  email: string
  setEmail: Dispatch<SetStateAction<string>>
  password: string
  setPassword: Dispatch<SetStateAction<string>>
  error: boolean
  // eslint-disable-next-line no-unused-vars
  signIn: (evt: FormEvent) => void
  auth: AuthContextType
}
export function useLogin(): UseLoginResponseType {
  const [email, setEmail] = useState("usuario@email.com")
  const [password, setPassword] = useState("1234")
  const [error, setError] = useState(false)

  const auth = useAuth()
  const navigate = useNavigate()

  function signIn(evt: FormEvent) {
    evt.preventDefault()

    auth.signin(
      email,
      password,
      () => setError(true),
      () => navigate("/"),
    )
  }

  return { email, setEmail, password, setPassword, error, signIn, auth }
}
