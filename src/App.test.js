import { render, screen } from "@testing-library/react";
import App from './App';
import { BrowserRouter } from "react-router-dom";

describe("<App />", () => {
  it ("renders a greeting", () => {
      render(
      <BrowserRouter>
          <App />
      </BrowserRouter>
  )
  // screen.logTestingPlaygroundURL()
      const greeting = screen.getByRole("heading", {
        name: /welcome to plant tinder/i
      })
      expect(greeting).toBeInTheDocument()
  })
})
