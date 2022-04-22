import { Box, Container } from "@mui/material"
import styled from "styled-components"

export const WrapperHeader = styled(Container)`
  &&& {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`

export const TotalExpenseWrapper = styled(Box).attrs({
  component: "span",
})`
  &&& {
  }
`
