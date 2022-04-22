import { TableBody, TableCell, TableContainer, TableHead } from "@mui/material"
import styled, { css } from "styled-components"

export const Cell = styled(TableCell)``
export const Wrapper = styled(TableContainer)`
  min-height: 50rem;
`
export const Body = styled(TableBody)``

export const Head = styled(TableHead)`
  &&& {
    ${({ theme }) => css`
      th {
        font-weight: ${theme.font.bold};
      }
    `}
  }
`
