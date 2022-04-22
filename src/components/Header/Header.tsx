import { helperFormatNumber } from "helpers"
import { ReactElement } from "react"
import * as S from "./styles"

export type HeaderProps = {
  children: ReactElement
  totalExpense: number
}

export const Header = ({ children, totalExpense }: HeaderProps) => (
  <S.WrapperHeader>
    {children}
    <S.TotalExpenseWrapper>
      Despesa total: <strong>R$ {helperFormatNumber(totalExpense)}</strong>
    </S.TotalExpenseWrapper>
  </S.WrapperHeader>
)
