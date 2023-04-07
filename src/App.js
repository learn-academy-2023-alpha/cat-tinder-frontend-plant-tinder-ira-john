import React, { useState } from "react"
import './App.css';
import {Routes, Route} from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/Home"
import PlantIndex from "./pages/PlantIndex"
import PlantNew from "./pages/PlantNew"
import PlantShow from "./pages/PlantShow"
import PlantEdit from "./pages/PlantEdit"
import NotFound from "./pages/NotFound"
import mockPlants from "./mockPlants"

const App = () => {
  const [plants, setPlants] = useState(mockPlants)
  const createPlant = (plant) => {
    console.log("Created plant:", plant)
  }
    return(
        <>
          <Header />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/plantindex" element={<PlantIndex plants={plants} />} /> 
              <Route path="/plantnew" element={<PlantNew createPlant={createPlant}/>} />
              <Route path="/plantshow/:id" element={<PlantShow plants={plants}/>} />
              <Route path="/plantedit" element={<PlantEdit />} />
              <Route path="/*" element={<NotFound />} />
          </Routes>
          <Footer />
        </>
    )
}

export default App;
