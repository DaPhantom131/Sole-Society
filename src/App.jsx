import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Routes/Home"
import Shop from "./Components/Routes/Shop"
import About from "./Components/Routes/About"
import Contact from "./Components/Routes/Contact"
import Navbar from "./Components/Routes/Navbar"
import Footer from "./Components/Footer"


import "./Styles/Main.css"
import "./Styles/Navbar.css"


const App = () => {
  return (

    <BrowserRouter>

  <React.Fragment>

    <Navbar/>

    <Routes>

      <Route path="/" element={<Home/>}/>
          {/* <Route path="/shop" element={<Shop/>} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
      
      
    </Routes>

     

  </React.Fragment>

    </BrowserRouter>
  )
}
   
export default App