import {render, screen} from "@testing-library/react"
import PlantIndex from "./PlantIndex"
import {BrowserRouter} from "react-router-dom"
import plants from "../mockPlants"

describe("<PlantIndex />", () => {
    it("renders plant cards", () => {
      render(
        <BrowserRouter>
          <PlantIndex plants={plants} />
        </BrowserRouter>
      )
    //   screen.logTestingPlaygroundURL()
      plants.forEach(plant => {
        const plantName = screen.getByText(plant.name)
        expect(plantName).toBeInTheDocument()
      })
    })
  })

   export default PlantIndex