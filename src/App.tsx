import { HelloWorld } from "components"
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "styles/GlobalStyles"
import { theme } from "styles/theme"

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <HelloWorld />
    </ThemeProvider>
  )
}

export default App
