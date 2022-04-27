import { AuthContext, AuthContextType } from "components/AuthProvider"
import { useContext } from "react"

export function useAuth(): AuthContextType {
  return useContext(AuthContext)
}
