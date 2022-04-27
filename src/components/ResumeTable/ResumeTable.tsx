import { Paper, Table, TableContainer, TableRow } from "@mui/material"
import { helperFormatNumber } from "helpers"

import * as S from "./styles"

export type ResumeTableProps = {
  resumeList: [string, number][]
}

export const ResumeTable = ({ resumeList }: ResumeTableProps) => (
  <TableContainer sx={{ maxHeight: "calc(100vh - 35rem)" }} component={Paper}>
    <Table
      stickyHeader
      sx={{ minWidth: 650 }}
      size="small"
      aria-label="a dense table"
    >
      <S.Head>
        <TableRow>
          <S.Cell>Categoria</S.Cell>
          <S.Cell align="center">Valor (R$)</S.Cell>
        </TableRow>
      </S.Head>
      <S.Body>
        {resumeList.map((resume, i) => (
          <TableRow
            // eslint-disable-next-line react/no-array-index-key
            key={`resume_${i}`}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <S.Cell component="th" scope="row">
              {resume[0]}
            </S.Cell>
            <S.Cell align="center">{helperFormatNumber(resume[1])}</S.Cell>
          </TableRow>
        ))}
      </S.Body>
    </Table>
  </TableContainer>
)
