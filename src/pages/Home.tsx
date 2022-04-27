import { Alert, Button } from "@mui/material"
import { ExpenseTable, Header, SelectDate } from "components"
import { useData } from "hooks"
import { useAuth } from "hooks/useAuth"
import { useNavigate } from "react-router-dom"
import { PulseLoader } from "react-spinners"

import * as S from "./styles"

export function Home() {
  const { user, signout } = useAuth()
  const navigate = useNavigate()
  const { error, loading, totalExpense, expenseList, month, year } = useData()

  return (
    <>
      {loading && (
        <S.LoadingWrapper>
          <PulseLoader />
        </S.LoadingWrapper>
      )}
      <S.Wrapper>
        <S.Header>
          Despesas
          <S.UserInfo>
            <S.UserName>Olá {user.nome} </S.UserName>
            <Button onClick={() => signout()} variant="outlined" size="small">
              Sair
            </Button>
          </S.UserInfo>
        </S.Header>
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
