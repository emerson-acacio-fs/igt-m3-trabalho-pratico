import axios, { AxiosResponse } from "axios"

type DataType = {
  id: number
  descricao: string
  categoria: string
  valor: number
  mes: string
  dia: string
}

export function getData(date: string): Promise<AxiosResponse<DataType[]>> {
  return axios.get<DataType[]>(
    `http://localhost:3001/despesas?mes=${date}&_sort=dia`,
  )
}

// return data.map((expense) => ({
//   id: expense.id,
//   description: expense.descricao,
//   category: expense.categoria,
//   value: expense.valor,
//   month: expense.mes,
//   day: expense.dia,
// }))
