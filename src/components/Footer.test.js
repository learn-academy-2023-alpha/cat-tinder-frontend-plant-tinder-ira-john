import { screen, render } from "@testing-library/react"
import Footer from "./Footer"
import {BrowserRouter} from "react-router-dom"

describe("<Footer />", () => {
    it ("has a copyright", () => {
        // Arrange: Render component App.js
        render(
        <BrowserRouter>
            <Footer />
        </BrowserRouter>
    )
        // screen.logTestingPlaygroundURL()
        const footer = screen.getByText(/© learn \| ira and john/i)
        expect (footer).toBeInTheDocument()
    })
})

export default Footer