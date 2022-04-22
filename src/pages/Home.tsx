import { Alert } from "@mui/material"
import { ExpenseTable, Header, SelectDate } from "components"
import { helperDateValidation } from "helpers"
import { useData } from "hooks"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { PulseLoader } from "react-spinners"
import { ExpenseType } from "types/ExpenseType"
import * as S from "./styles"

type ParamType = { date: string }

export function Home() {
  const [expenseList, setExpenseList] = useState<ExpenseType[]>([])
  const params = useParams<ParamType>()
  const navigate = useNavigate()
  const { error, loading } = useData(params.date, setExpenseList)
  const { month, year } = helperDateValidation(params.date)

  const totalExpense = expenseList.reduce((acc, item) => acc + item.value, 0)

  return (
    <>
      {loading && (
        <S.LoadingWrapper>
          <PulseLoader />
        </S.LoadingWrapper>
      )}
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
        {error && (
          <Alert severity="error">The requested date is invalid!</Alert>
        )}
        <ExpenseTable expenseList={expenseList} />
      </S.Wrapper>
    </>
  )
}
