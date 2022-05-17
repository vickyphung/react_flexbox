import React from "react";
import './css/home.css';
import About from './About';
import Boxtwo from "./BoxTwo";

const Home = () => {
    return (
        <div className="placeApp">Per Scholas is Awesome
            <div className="container">
                <About />
                <Boxtwo />
            </div>
        </div>


        
    )
}

export default Home