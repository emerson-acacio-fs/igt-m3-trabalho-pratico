import { AxiosResponse } from "axios"
import { client } from "./client"

export type UserType = {
  nome: string
  email: string
}

export function createSession(
  email: string,
  senha: string,
): Promise<AxiosResponse<UserType>> {
  return client.post<UserType>(`/sessao/criar`, { email, senha })
}
export function getUser(): Promise<AxiosResponse<UserType>> {
  return client.get<UserType>(`/sessao/usuario`)
}
export function finalize() {
  return client.post(`/sessao/finalizar`)
}
