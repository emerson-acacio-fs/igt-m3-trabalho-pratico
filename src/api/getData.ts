import { AxiosResponse } from "axios"
import { client } from "./client"

type DataType = {
  id: number
  descricao: string
  categoria: string
  valor: number
  mes: string
  dia: string
}

export function getData(date: string): Promise<AxiosResponse<DataType[]>> {
  return client.get<DataType[]>(`/despesas?mes=${date}&_sort=dia`)
}
