import { ReactElement } from "react"
import { ThemeProvider } from "styled-components"
import { theme } from "styles/theme"
import { render, RenderOptions } from "@testing-library/react"

const customRender = (ui: ReactElement, renderOptions: RenderOptions = {}) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>, renderOptions)

export { customRender as render }
