import { Home } from "pages/Home"
import {
  HashRouter as Router,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom"

import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "styles/GlobalStyles"
import {
  createTheme,
  ThemeProvider as MaterialThemeProvider,
} from "@mui/material/styles"
import { theme } from "styles/theme"
import { Login } from "pages/Login"
import { AuthProvider } from "components/AuthProvider"
import { useAuth } from "hooks/useAuth"

const materialTheme = createTheme({
  typography: {
    fontSize: 25.6,
  },
})

function RequireAuth({ children }: { children: JSX.Element }) {
  const auth = useAuth()
  const location = useLocation()

  if (auth.isChecking) {
    return <div />
  }

  if (!auth.user.email) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}

function App(): JSX.Element {
  return (
    <AuthProvider>
      <MaterialThemeProvider theme={materialTheme}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Router>
            <Routes>
              <Route
                path="*"
                element={
                  <RequireAuth>
                    <Home />
                  </RequireAuth>
                }
              />
              <Route path="/login" element={<Login />} />
              <Route
                path=":date"
                element={
                  <RequireAuth>
                    <Home />
                  </RequireAuth>
                }
              />
            </Routes>
          </Router>
        </ThemeProvider>
      </MaterialThemeProvider>
    </AuthProvider>
  )
}

export default App
