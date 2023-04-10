import React from "react"
import {NavLink} from "react-router-dom"
import {Card, CardBody, CardSubtitle, CardTitle, Button} from "reactstrap"

const PlantIndex = ({plants}) => {
    return (
      <>
        <h1>Here are the lovley plants!</h1>
        <p>Check out their Roots</p>
        <div className="card-flex">
          {plants.map((plant, index) => {
            return (
              <Card
                key={index}
                style={{
                  width: "18rem"
                }}
              >
                <img
                  alt={plant.name}
                  src={plant.image}
                />
                <CardBody>
                  <CardTitle tag="h5">
                    {plant.name}
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                  >
                    {plant.age}
                  </CardSubtitle>
                  <Button>
                    <NavLink to={`/plantshow/${plant.id}`}>More About Me</NavLink>
                  </Button>
                </CardBody>
              </Card>
              
            )
          })}
        </div>
        <Button>
                    <NavLink to={`/plantnew`}>New Plant Profile</NavLink>
                  </Button>
      </>
    )
  }
export default PlantIndex