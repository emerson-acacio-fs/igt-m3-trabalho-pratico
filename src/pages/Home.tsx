import { ExpenseTable, Header, SelectDate } from "components"
import { useParams } from "react-router-dom"
import * as S from "./styles"

type ParamType = { date: string }
const CRURRENT_DATE = new Date()
export function Home() {
  const params = useParams<ParamType>()
  const date = params.date?.split("-")
  let month = CRURRENT_DATE.getMonth()
  let year = CRURRENT_DATE.getFullYear()
  if (date && !!date[0] && !!date[1]) {
    month = Number(date[1]!)
    year = Number(date[0]!)
  }
  return (
    <S.Wrapper>
      <Header totalExpense={125.524632}>
        <SelectDate
          year={year}
          month={month}
          handleSelectedMonth={() => false}
          handleSelectedYear={() => false}
        />
      </Header>
      <ExpenseTable
        expenseList={[
          {
            id: 1,
            description: "sssss",
            category: "sssss",
            value: 2222.34662,
            month: "2020-06",
            day: 23,
          },
          {
            id: 2,
            description: "qq",
            category: "www",
            value: 2323.34662,
            month: "2020-06",
            day: 23,
          },
        ]}
      />
    </S.Wrapper>
  )
}
