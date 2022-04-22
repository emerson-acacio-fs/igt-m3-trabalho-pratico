import { Paper, Table, TableContainer, TableRow } from "@mui/material"
import { helperFormatNumber } from "helpers"
import { ExpenseType } from "types/ExpenseType"
import * as S from "./styles"

export type ExpenseTableProps = {
  expenseList: ExpenseType[]
}

export const ExpenseTable = ({ expenseList }: ExpenseTableProps) => (
  <TableContainer sx={{ maxHeight: "calc(100vh - 15rem)" }} component={Paper}>
    <Table
      stickyHeader
      sx={{ minWidth: 650 }}
      size="small"
      aria-label="a dense table"
    >
      <S.Head>
        <TableRow>
          <S.Cell>Despesa</S.Cell>
          <S.Cell align="center">Categoria</S.Cell>
          <S.Cell align="center">Dia</S.Cell>
          <S.Cell align="center">Valor (R$)</S.Cell>
        </TableRow>
      </S.Head>
      <S.Body>
        {expenseList.map((expense) => (
          <TableRow
            key={expense.id}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <S.Cell component="th" scope="row">
              {expense.description}
            </S.Cell>
            <S.Cell align="center">{expense.category}</S.Cell>
            <S.Cell align="center">{expense.day}</S.Cell>
            <S.Cell align="center">{helperFormatNumber(expense.value)}</S.Cell>
          </TableRow>
        ))}
      </S.Body>
    </Table>
  </TableContainer>
)
