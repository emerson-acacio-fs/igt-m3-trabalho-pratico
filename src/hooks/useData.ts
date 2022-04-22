import { getData } from "api/getData"
import { helperDateValidation } from "helpers"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { ExpenseType } from "types/ExpenseType"

export function useData(
  date: string | undefined,
  setExpenseList: Dispatch<SetStateAction<ExpenseType[]>>,
) {
  const [error, setError] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  useEffect(() => {
    async function getDataFromApi() {
      setLoading(true)
      try {
        const newDate = helperDateValidation(date)
        if (newDate.isValidated) {
          const { data } = await getData(
            `${newDate.year}-${String(newDate.month).padStart(2, "0")}`,
          )

          const newData = data.map((expense) => ({
            id: expense.id,
            description: expense.descricao,
            category: expense.categoria,
            value: expense.valor,
            month: expense.mes,
            day: expense.dia,
          }))

          setExpenseList([...newData])
          setError(false)
        } else {
          setExpenseList([])
          setError(true)
        }
      } catch (err) {
        console.error(err)
        setExpenseList([])
        setError(true)
      }
      setTimeout(() => setLoading(false), 500)
    }
    getDataFromApi()
  }, [date, setExpenseList])
  return { error, loading }
}
