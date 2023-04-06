import {render, screen} from "@testing-library/react"
import PlantShow from "./PlantShow"
import plants from "../mockPlants"
import {MemoryRouter, Routes, Route} from "react-router-dom"


const renderShow = () => {
    render(
      <MemoryRouter initialEntries={["/plantshow/1"]}>
        <Routes>
          <Route path="/plantshow/:id" element={<PlantShow plants={plants} />} />
        </Routes>
      </MemoryRouter>
    )
  }





describe("<PlantShow />", () => {
    it("renders plant enjoy attribute", () => {
      renderShow()
    //   screen.logTestingPlaygroundURL()
        const enjoys = screen.getByText(`Enjoys ${plants[0].enjoys}`)
        expect(enjoys).toBeInTheDocument()
      })
    })

   export default PlantShow