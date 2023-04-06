import { screen, render } from "@testing-library/react"
import Header from "./Header"
import {BrowserRouter} from "react-router-dom"

describe("<Header />", () => {
    it ("has a header", () => {
        render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    )
        // screen.logTestingPlaygroundURL()
        const header = screen.getByRole("heading", {
            name: /welcome to plant tinder/i
          })
        expect (header).toBeInTheDocument()
    })
})

export default Header