import React from "react"
import { render } from "@testing-library/react"
import { useParams } from "react-router-dom"
import {Card, CardBody, CardSubtitle, CardText, CardTitle, Button} from "reactstrap"

const PlantShow = ({plants}) => {
    const { id } = useParams()
    let selectedPlant = plants.find(plant => plant.id === +id) 
    console.log(selectedPlant)
    return (
    <>
      {selectedPlant && (
        <Card
        style={{
          width: "100%"
        }}
      >
        <img
          alt={selectedPlant.name}
          src={selectedPlant.image}
        />
        <CardBody>
          <CardTitle tag="h5">
            {selectedPlant.name}
          </CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
          >
            Age: {selectedPlant.age}
          </CardSubtitle>
          <CardText>
            Enjoys {selectedPlant.enjoys}
          </CardText>
        </CardBody>
      </Card>
      )}
    </>
  )
}

export default PlantShow