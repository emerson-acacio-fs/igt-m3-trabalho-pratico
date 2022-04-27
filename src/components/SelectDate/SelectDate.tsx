import { InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material"
import { helperCreateArray } from "helpers"
import * as S from "./styles"

export type SelectDateProps = {
  beginYear?: number
  endYear?: number
  year: number
  month: number
  // eslint-disable-next-line no-unused-vars
  handleSelectedYear: (year: number) => void
  // eslint-disable-next-line no-unused-vars
  handleSelectedMonth: (month: number) => void
}

const MONTHS = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
]

const CURRENT_YEAR = new Date().getFullYear()
export const SelectDate = ({
  beginYear = 2020,
  endYear = CURRENT_YEAR,
  year,
  month,
  handleSelectedYear,
  handleSelectedMonth,
}: SelectDateProps) => {
  const yearsList = helperCreateArray(beginYear, endYear)

  const handleYear = ({ target: { value } }: SelectChangeEvent<number>) => {
    if (handleSelectedYear) {
      handleSelectedYear(value as number)
    }
  }
  const handleMonth = ({ target: { value } }: SelectChangeEvent<number>) => {
    if (handleSelectedMonth) {
      handleSelectedMonth(value as number)
    }
  }

  return (
    <S.WrapperSelectDate>
      <S.FormWrapper>
        <InputLabel id="select-year-label">Ano</InputLabel>
        <Select
          labelId="select-year-label"
          value={year}
          label="Age"
          onChange={handleYear}
        >
          {yearsList.map((yearLabel) => (
            <MenuItem key={`$year-select-${yearLabel}`} value={yearLabel}>
              {yearLabel}
            </MenuItem>
          ))}
        </Select>
      </S.FormWrapper>

      <S.FormWrapper>
        <InputLabel id="month-select-label">Mês</InputLabel>
        <Select
          labelId="month-select-label"
          id="month-select"
          value={month}
          label="Age"
          onChange={handleMonth}
        >
          {MONTHS.map((monthLabel, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <MenuItem key={`${monthLabel}-${i}`} value={i + 1}>
              {monthLabel}
            </MenuItem>
          ))}
        </Select>
      </S.FormWrapper>
    </S.WrapperSelectDate>
  )
}
