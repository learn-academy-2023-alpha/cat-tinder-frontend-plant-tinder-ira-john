import React from "react"
import { useParams, useNavigate } from "react-router-dom"
import {Card, CardBody, CardSubtitle, CardText, CardTitle, Button} from "reactstrap"
import {NavLink} from "react-router-dom"


const PlantShow = ({plants, deletePlant}) => {
    const { id } = useParams()
    const navigate = useNavigate()
    let selectedPlant = plants.find(plant => plant.id === +id)

    const handleSubmit = () => {
      deletePlant(id)
      navigate("/plantindex")
    }

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
        <div className="card-flex">
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
            Enjoys: {selectedPlant.enjoy}
          </CardText>
          <Button onClick={handleSubmit}> Delete Plant </Button>
        </CardBody>
        </div>
      </Card>
      
      )}
      <Button>
      <NavLink 
      to={`/plantedit/${selectedPlant.id}`} 
      className="nav-link">
          Edit Plant Profile
      </NavLink>
      </Button>
      <Button>
      <NavLink 
      to={`/plantindex`} 
      className="nav-link">
          Back to Plant Index
      </NavLink>
      </Button>
    
    </>
  )
}

export default PlantShow