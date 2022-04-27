import { TabContext, TabList, TabPanel } from "@mui/lab"
import { Alert, Box, Button, Tab } from "@mui/material"
import { ExpenseTable, Header, ResumeTable, SelectDate } from "components"
import { useData } from "hooks"
import { useAuth } from "hooks/useAuth"
import { SyntheticEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import { PulseLoader } from "react-spinners"

import * as S from "./styles"

export function Home() {
  const { user, signout } = useAuth()
  const [tabValue, setTabValue] = useState("1")
  const navigate = useNavigate()
  const { error, loading, totalExpense, expenseList, month, year, resume } =
    useData()

  const handleChangeTab = (event: SyntheticEvent, newValue: string) => {
    setTabValue(newValue)
  }

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
        <TabContext value={tabValue}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChangeTab}>
              <Tab label="RESUMO" value="1" />
              <Tab label="DETALHES" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <ResumeTable resumeList={resume} />
          </TabPanel>
          <TabPanel value="2">
            <ExpenseTable expenseList={expenseList} />
          </TabPanel>
        </TabContext>
      </S.Wrapper>
    </>
  )
}
