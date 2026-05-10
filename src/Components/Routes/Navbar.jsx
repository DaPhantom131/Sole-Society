import React from "react"
import {Link} from "react-router-dom"
import "../../Scripts/Scroll.js";
import "../../Styles/Navbar.css";

const Navbar = () => {
    return (
       <React.Fragment>

         <nav className="header">

        <div className="nav-logo"> <img src="/Assets/Image/logo.png" 
        alt="my nav logo" width={105}/> </div>
                
        <div className="nav-links">
           <Link to={"/"}  className="links">Home</Link>
           <Link to={"/shop"} className="links">Shop</Link>
            <Link to={"/about"} className="links">About</Link>
            <Link to={"/contact"} className="links">Contact</Link>
            </div>

         <div className="nav-users">
             <Link to={"/user"}> <i class="fa fa-user" aria-hidden="true" 
             style={{ fontSize: "30px", color: "black"}} title="Account"></i> </Link>
             <Link to={"/cart"}> <i class="fa fa-shopping-cart" aria-hidden="true"
              style={{ fontSize: "30px", color:"black" }} title="Cart"></i> </Link>
            </div>

            </nav>
                

       </React.Fragment>
    )
}

export default Navbar