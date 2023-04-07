import React from "react"
import { render } from "@testing-library/react"
import { useParams } from "react-router-dom"
import {Card, CardBody, CardSubtitle, CardText, CardTitle, Button} from "reactstrap"
import { useNavigate } from "react-router-dom"
import {NavLink} from "react-router-dom"


const PlantShow = ({plants}) => {
    const { id } = useParams()
    let selectedPlant = plants.find(plant => plant.id === +id) 
    
    const navigate = useNavigate()


    return (
    <>
      {selectedPlant && (
        <Card
        style={{
          width: "45%"
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
      <Button>
      <NavLink 
      to={`/plantedit/${selectedPlant.id}`} 
      className="nav-link">
          Edit Plant Profile
      </NavLink>
      </Button>
    
    </>
  )
}

export default PlantShow