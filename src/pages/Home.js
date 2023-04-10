import React from "react"
import { NavLink } from "react-router-dom"
import { Button } from "reactstrap"

const Home = () => {
    
    return (
        <>
            <img className="home-background" src="https://live.staticflickr.com/1245/776524828_ee85432b68_b.jpg" alt="Flower"/>
                <p className="home-title">Its Tinder, but for plants!</p>
                <div>
                <Button>
                <NavLink to={`/plantindex`}>Let's Meet Your New Match!</NavLink>
              </Button>
                <br/>
                </div>
        </>
    )   
}
                    

export default Home