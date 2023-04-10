import React, { useState } from "react"
import { Form, FormGroup, Input, Label, Button } from "reactstrap"
import { useNavigate, useParams } from "react-router-dom"

  
    const PlantEdit = ({ plants, updatePlant }) => {
        const { id } = useParams()
        let currentPlant = plants?.find((plant) => plant.id === +id)
      
        const [editPlant, setEditPlant] = useState({
          name: currentPlant.name,
          age: currentPlant.age,
          enjoys: currentPlant.enjoys,
          image: currentPlant.image
        })

        const handleChange = (e) => {
          setEditPlant({ ...editPlant, [e.target.name]: e.target.value })
        }

        const navigate = useNavigate()
        const handleSubmit = () => {
            updatePlant(editPlant, currentPlant.id)
            navigate(`/plantshow/${id}`)}

    return (
        <>
            <div>Plant Tinder!</div>

            <div className="card-flex">
            <Form>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input 
                    name="name"
                    type="text" 
                    placeholder="What is your name?"
                    onChange={handleChange} />
                </FormGroup>

                <FormGroup>
                    <Label for="age">Plant Age</Label>
                    <Input 
                    name="age"
                    type="number" 
                    placeholder="What is your age?"
                    onChange={handleChange} />
                </FormGroup>

                <FormGroup>
                    <Label for="enjoys">Enjoys</Label>
                    <Input 
                    name="enjoys"
                    type="text" 
                    placeholder="What do you enjoy?"
                    onChange={handleChange} />
                </FormGroup>

                <FormGroup>
                    <Label for="image">Image URL</Label>
                    <Input 
                    name="image"
                    type="text" 
                    placeholder="Show us your face!"
                    onChange={handleChange} />
                </FormGroup>
            </Form>
            </div>
            <Button onClick={handleSubmit} name="submit">Submit Updated Plant</Button>
            
    </> 
    )
}

export default PlantEdit