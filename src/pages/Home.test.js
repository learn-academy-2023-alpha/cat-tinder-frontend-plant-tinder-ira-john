import { screen, render } from "@testing-library/react"
import Home from "./Home"
import {BrowserRouter} from "react-router-dom"

describe("<Home />", () => {
    it ("renders without crashing", () => {
        render(
        <BrowserRouter>
            <Home />
        </BrowserRouter>
    )
    screen
        const text = screen.getByText(/its tinder, but for plants!/i)
            expect(text).toBeInTheDocument()
    })
})
