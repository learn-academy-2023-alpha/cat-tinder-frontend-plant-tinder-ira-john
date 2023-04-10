import React, { useState, useEffect } from "react"
import "./App.css"
import {Routes, Route} from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/Home"
import PlantIndex from "./pages/PlantIndex"
import PlantNew from "./pages/PlantNew"
import PlantShow from "./pages/PlantShow"
import PlantEdit from "./pages/PlantEdit"
import NotFound from "./pages/NotFound"

const App = () => {
  const [plants, setPlants] = useState([])

  
  const readPlant = () => {
    fetch("http://localhost:3000/plants")
      .then((response) => response.json())
      .then((payload) => setPlants(payload))
      .catch((error) => console.log(error))
  }
  const createPlant = (plant) => {
    fetch("http://localhost:3000/plants", {
      body: JSON.stringify(plant),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((response) => response.json())
      .then((payload) => readPlant(payload))
      .catch((errors) => console.log("Plant create errors:", errors))
  }
  
  const updatePlant = (plant, id) => {
    fetch(`http://localhost:3000/plants/${id}`, {
    body: JSON.stringify(plant),
    headers: {
      "Content-Type": "application/json"
    },
    method: "PATCH",
  })
    .then((response) => response.json())
    .then((payload) => readPlant(payload))
    .catch((errors) => console.log("Plant update errors:", errors))
}

const deletePlant = (id) => {
  fetch(`http://localhost:3000/plants/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((payload) => readPlant(payload))
    .catch((errors) => console.log("delete errors:", errors));
};
useEffect(() => {
  readPlant()
}, [])

    return(
        <>
          <Header />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/plantindex" element={<PlantIndex plants={plants} />} /> 
              <Route path="/plantnew" element={<PlantNew createPlant={createPlant}/>} />
              <Route path="/plantshow/:id" element={<PlantShow plants={plants} deletePlant={deletePlant}/>} />
              <Route path="/plantedit/:id" element={<PlantEdit plants={plants} updatePlant={updatePlant} />} />
              <Route path="/*" element={<NotFound />} />
          </Routes>
          <Footer />
        </>
    )
}

export default App
