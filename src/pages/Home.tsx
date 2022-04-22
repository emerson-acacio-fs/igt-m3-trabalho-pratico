import { Alert } from "@mui/material"
import { getData } from "api/getData"
import { ExpenseTable, Header, SelectDate } from "components"
import { helperDateValidation } from "helpers"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ExpenseType } from "types/ExpenseType"
import * as S from "./styles"

type ParamType = { date: string }

export function Home() {
  const [expenseList, setExpenseList] = useState<ExpenseType[]>([])
  const params = useParams<ParamType>()
  const navigate = useNavigate()

  const { month, year, isValidated } = helperDateValidation(params.date)
  useEffect(() => {
    async function getDataFromApi() {
      const newDate = helperDateValidation(params.date)
      const data = await getData(
        `${newDate.year}-${String(newDate.month).padStart(2, "0")}`,
      )
      setExpenseList([...data])
    }
    getDataFromApi()
  }, [params])

  const totalExpense = expenseList.reduce((acc, item) => acc + item.value, 0)

  return (
    <S.Wrapper>
      <Header totalExpense={totalExpense}>
        <SelectDate
          year={year}
          month={month}
          handleSelectedMonth={(newMonth) => {
            navigate(`/${year}-${String(newMonth).padStart(2, "0")}`)
          }}
          handleSelectedYear={(newYear) => {
            navigate(`/${newYear}-${String(month).padStart(2, "0")}`)
          }}
        />
      </Header>
      {!isValidated && (
        <Alert severity="error">The requested date is invalid!</Alert>
      )}
      <ExpenseTable expenseList={expenseList} />
    </S.Wrapper>
  )
}
