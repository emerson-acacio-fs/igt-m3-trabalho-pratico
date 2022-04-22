import axios from "axios"
import { ExpenseType } from "types/ExpenseType"

type DataType = {
  id: number
  descricao: string
  categoria: string
  valor: number
  mes: string
  dia: string
}

export async function getData(date: string): Promise<ExpenseType[]> {
  try {
    const { data } = await axios.get<DataType[]>(
      `http://localhost:3001/despesas?mes=${date}&_sort=dia`,
    )
    return data.map((expense) => ({
      id: expense.id,
      description: expense.descricao,
      category: expense.categoria,
      value: expense.valor,
      month: expense.mes,
      day: expense.dia,
    }))
  } catch (error) {
    console.error(error)
  }
  return []
}
