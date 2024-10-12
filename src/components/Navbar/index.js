import { Component} from "react"
import {Link} from "react-router-dom"
import logo1 from "./logo1.png"
import "./index.css"
class Navbar extends Component {
    state={
        isListActive:false,
        isTupleActive:false,
        isSetActive:false,
        isDictionaryActive:false,
        isArrayActive:false,
        isObjectActive:false
    }
    render(){
        const{isArrayActive,isObjectActive,isDictionaryActive,isTupleActive,isListActive,isSetActive}=this.state
        return(
             <nav class="nav-container">
                <img src={logo1} />
                <ul class="nav-items">
                    <Link to="/list" class="nav-link"><li><a href="#">Lists</a></li></Link>
                    <Link to="/tuple" class="nav-link"><li ><a href="#">Tuples</a></li></Link>
                    <Link to="/set" class="nav-link"><li><a href="#">Sets</a></li></Link>
                    <Link to="/dictionary" class="nav-link"><li><a href="#">Dictionary</a></li></Link>
                    <Link to="/array" class="nav-link"><li><a href="#">Arrays</a></li></Link>
                    <Link to="/object" class="nav-link"><li><a href="#">Objects</a></li></Link>

                     
                     
                     
                     
                     
                     
                     
                </ul>
             </nav>
        )
    }
}

export default Navbar