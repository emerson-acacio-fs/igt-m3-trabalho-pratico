import { AxiosResponse } from "axios"
import { loginClient } from "./client"

export type UserType = {
  nome: string
  email: string
}

export function createSession(
  email: string,
  senha: string,
): Promise<AxiosResponse<UserType>> {
  return loginClient.post<UserType>(`/sessao/criar`, { email, senha })
}
export function getUser(): Promise<AxiosResponse<UserType>> {
  return loginClient.get<UserType>(`/sessao/usuario`)
}
export function finalize() {
  return loginClient.post(`/sessao/finalizar`)
}
