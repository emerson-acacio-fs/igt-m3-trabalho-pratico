import styled from "styled-components"
import { Container } from "@mui/material"

export const Wrapper = styled(Container)`
  &&& {
    display: flex;
    row-gap: 3rem;
    flex-direction: column;
    margin: 3rem auto;
  }
`
