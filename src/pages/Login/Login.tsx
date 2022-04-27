import { Alert, Box, Button, TextField } from "@mui/material"
import { useLogin } from "hooks"
import { Navigate, useLocation } from "react-router-dom"
import * as S from "./styles"

export const Login = () => {
  const { email, setEmail, password, setPassword, error, signIn, auth } =
    useLogin()

  const location = useLocation()

  if (auth.isChecking) {
    return <div />
  }

  if (auth.user.email && !auth.isChecking) {
    return <Navigate to="/" state={{ from: location }} replace />
  }

  return (
    <S.Wrapper maxWidth="sm">
      <h1>Desafio do Módulo 3</h1>
      <S.FormWrapper onSubmit={signIn}>
        <TextField
          type="email"
          variant="outlined"
          label="E-mail"
          fullWidth
          value={email}
          onChange={(evt) => setEmail(evt.target.value)}
          margin="normal"
        />
        <TextField
          type="password"
          variant="outlined"
          label="Password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(evt) => setPassword(evt.target.value)}
        />
        {error && (
          <Alert severity="error">
            E-mail não encontrado ou senha incorreta
          </Alert>
        )}
        <Box textAlign="right" marginTop="16px">
          <Button type="submit" variant="contained" color="primary">
            Entrar
          </Button>
        </Box>
      </S.FormWrapper>
    </S.Wrapper>
  )
}
