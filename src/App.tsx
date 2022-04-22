import { Home } from "pages/Home"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "styles/GlobalStyles"
import {
  createTheme,
  ThemeProvider as MaterialThemeProvider,
} from "@mui/material/styles"
import { theme } from "styles/theme"

const materialTheme = createTheme({
  typography: {
    fontSize: 25.6,
  },
})

function App(): JSX.Element {
  return (
    <MaterialThemeProvider theme={materialTheme}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router>
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path=":date" element={<Home />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </MaterialThemeProvider>
  )
}

export default App
