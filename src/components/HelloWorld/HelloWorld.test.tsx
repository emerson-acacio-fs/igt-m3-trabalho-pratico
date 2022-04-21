import { screen } from "@testing-library/react"
import { render } from "helpers/test-utils"
import { HelloWorld } from "./HelloWorld"

describe("< HelloWorld />", () => {
  it("should exist in the document", () => {
    render(<HelloWorld />)
    expect(screen.getByText(/hello world/i)).toBeInTheDocument()
  })
})
