import { TableCell, TableHead } from "@mui/material"
import styled, { css } from "styled-components"

export const Cell = styled(TableCell)``

export const Head = styled(TableHead)`
  &&& {
    ${({ theme }) => css`
      th {
        font-weight: ${theme.font.bold};
      }
    `}
  }
`
