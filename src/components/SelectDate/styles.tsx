import styled from "styled-components"
import { Box, FormControl } from "@mui/material"

export const WrapperSelectDate = styled(Box).attrs({
  component: "span",
})`
  &&& {
    display: flex;
    flex-direction: row;
    column-gap: 1.5rem;
  }
`

export const FormWrapper = styled(FormControl).attrs({
  variant: "standard",
})``
