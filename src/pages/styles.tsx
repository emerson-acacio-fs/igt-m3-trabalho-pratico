import styled from "styled-components"
import { Container, Box } from "@mui/material"

export const Wrapper = styled(Container)`
  &&& {
    display: flex;
    row-gap: 3rem;
    flex-direction: column;
    padding: 3rem;
  }
`

export const LoadingWrapper = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.mask};
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  z-index: 1000;
  justify-content: center;
  &&& {
    span > span {
      background-color: ${({ theme }) => theme.colors.blue};
      width: 2rem;
      height: 2rem;
    }
  }
`

export const Header = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const UserInfo = styled.span``
export const UserName = styled.span``
