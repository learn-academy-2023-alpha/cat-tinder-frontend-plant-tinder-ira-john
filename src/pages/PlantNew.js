import React, {useState} from 'react'
import { Form, FormGroup, Input, Label, Button } from "reactstrap"
import { NavLink, useNavigate } from 'react-router-dom'

const PlantNew = ({createPlant}) => {
    const navigate = useNavigate()
    const [newPlant, setNewPlant] = useState({
        name: "",
        age: "",
        enjoy: "",
        image: ""
    })

    const handleChange = (e) => {
        setNewPlant({ ...newPlant, [e.target.name]: e.target.value })
    }

    const handleSubmit = () => {
        createPlant(newPlant)
        navigate("/plantindex")
    }
    return (
        <>
            <h1>Join us to find your perfect match!</h1>
            <div className='card-flex'>
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
                    <Label for="enjoy">Enjoys</Label>
                    <Input 
                    name="enjoy"
                    type="text" 
                    placeholder="What do you enjoy?"
                    onChange={handleChange} />
                </FormGroup>

                <FormGroup>
                    <Label for="image">Image URL</Label>
                    <Input 
                    name="image"
                    type="url" 
                    placeholder="Show us your face!"
                    onChange={handleChange} />
                </FormGroup>
            </Form>
            </div>
            <div className='card-flex'>
            <Button onClick={handleSubmit} name="submit">Submit</Button>
            <Button>
                <NavLink to={`/plantindex`}>Back to Index</NavLink>
            </Button>
            </div>
        </>
    )
}

export default PlantNew