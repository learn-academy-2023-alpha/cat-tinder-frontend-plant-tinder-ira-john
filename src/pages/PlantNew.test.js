import { render, screen } from '@testing-library/react';
import PlantNew from './PlantNew';
import { BrowserRouter } from "react-router-dom"

describe("<PlantNew />", () => {
  beforeEach(() => {
    render(
        
      <BrowserRouter>
        <PlantNew />
      </BrowserRouter>
    )
  })
  it("renders the PlantNew page for the user", () => {
    const inputTitle = screen.getByPlaceholderText(/what is your name\?/i)
    expect(inputTitle).toBeInTheDocument()
  })

  it("has a form with entries for name, age, enjoys, and image", () => {
    const formName = screen.getByText(/name/i)
    expect(formName.getAttribute("for")).toEqual("name")

    const formAge = screen.getByText(/plant age/i)
    expect(formAge.getAttribute("for")).toEqual("age")

    const formEnjoys = screen.getByText(/enjoys/i)
    expect(formEnjoys.getAttribute("for")).toEqual("enjoys")

    const formImage = screen.getByText(/image url/i)
    expect(formImage.getAttribute("for")).toEqual("image")
  })
})