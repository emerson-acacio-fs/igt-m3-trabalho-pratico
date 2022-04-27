import { getData } from "api/getData"
import { helperDateValidation } from "helpers"
import { useEffect, useMemo, useState } from "react"
import { useParams } from "react-router-dom"
import { ExpenseType } from "types/ExpenseType"

type ParamType = { date: string }

export function useData() {
  const { date } = useParams<ParamType>()
  const [error, setError] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [expenseList, setExpenseList] = useState<ExpenseType[]>([])
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
  }, [date])

  const { month, year } = useMemo(() => helperDateValidation(date), [date])

  const totalExpense = useMemo(
    () => expenseList.reduce((acc, item) => acc + item.value, 0),
    [expenseList],
  )

  return { error, loading, totalExpense, expenseList, month, year }
}
