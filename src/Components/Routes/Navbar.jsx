import React, { useEffect, useRef } from "react"
import { Link } from "react-router-dom"



const Navbar = () => {

   const navRef = useRef(null);

   useEffect(() => {
      const handleScroll = () => {

         if (window.scrollY >= 70) {

            navRef.current.classList.add("navbar-scroll");
         } else {
            navRef.current.classList.remove("navbar-scroll");
         }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
         window.removeEventListener("scroll", handleScroll)
      }
   }, []);

   return (
      <React.Fragment>


         <nav className="header" ref={navRef}>

            <div className="nav-logo"> <img src="/Assets/Image/text-logo.png" alt="my nav logo" width={200} /> </div>

            <div className="nav-links">
               <Link to={"/"} className="links">Home</Link>
               <Link to={"/shop"} className="links">Shop</Link>
               <Link to={"/about"} className="links">About</Link>
               <Link to={"/contact"} className="links">Contact</Link>
            </div>

            <div className="nav-users">
               <Link to={"/account"}> <i class="fa fa-user" aria-hidden="true" style={{ fontSize: "30px", color: "black" }} title="Account"></i> </Link>
               <Link to={"/cart"}> <i class="fa fa-shopping-cart" aria-hidden="true" style={{ fontSize: "30px", color: "black" }} title="Cart"></i> </Link>
            </div>

         </nav>



      </React.Fragment>
   )
}

export default Navbar