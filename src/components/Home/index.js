import React from 'react';
import {Component} from "react"
import homeLogo from "./homeLogo.png"
import Navbar from "../Navbar"
import "./index.css"
import {Link} from "react-router-dom"

class Home extends Component{
    render(){
        return(
            <div class="home-container">
                <Navbar/>
                <div class="main-container">
                    <div class="text-container">
                      <h1>Welcome to Data Structures Playground</h1>
                      <p>Dive into the fascinating world of data structures! Here, you can 
                        explore and manipulate various structures like lists, sets, tuples, 
                        dictionaries, objects, and arrays. Whether you're a beginner eager to 
                        learn or a seasoned programmer brushing up on your skills, our interactive 
                        platform will guide you every step of the way.</p>
                      <p class="text-para">Discover the power of data structures and transform the way you code!</p>
                      <Link to="/list"><button class="start-button" type="button">Get Started</button></Link>
                    </div>
                    <img src={homeLogo}/>

                </div>

                
            </div>
        )
    }
}

export default Home;