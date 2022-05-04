import { getData } from "api/getData"
import { helperDateValidation } from "helpers"
import { useEffect, useMemo, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ExpenseType } from "types/ExpenseType"

type ParamType = { date: string }

const getResume = (expenseList: ExpenseType[]): [string, number][] => {
  const resume: { [key: string]: number } = {}
  expenseList.forEach((expense) => {
    if (!resume[expense.category]) {
      resume[expense.category] = expense.value
    } else {
      resume[expense.category] += expense.value
    }
  })
  return Object.entries(resume).sort((a, b) => b[1] - a[1])
}

export function useData() {
  const { date } = useParams<ParamType>()
  const [error, setError] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const navigate = useNavigate()
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
          navigate("/expenses/2021-06")
        }
      } catch (err) {
        console.error(err)
        setExpenseList([])
        setError(true)
      }
      setTimeout(() => setLoading(false), 500)
    }
    getDataFromApi()
  }, [date, navigate])

  const { month, year } = useMemo(() => helperDateValidation(date), [date])

  const totalExpense = useMemo(
    () => expenseList.reduce((acc, item) => acc + item.value, 0),
    [expenseList],
  )

  const resume = useMemo(() => getResume(expenseList), [expenseList])

  return { error, loading, totalExpense, expenseList, month, year, resume }
}
