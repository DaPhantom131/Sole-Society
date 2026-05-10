import React from "react"
import {BrowserRouter,Routes,Route} from <React-router-dom></React-router-dom>
import "./Styles/Main.css"
import "./Styles/Navbar.css"
import Home from "./Components/Routes/Home"
import Shop from "./Components/Routes/Shop"
import About from "./Components/Routes/About"
import Contact from "./Components/Routes/Contact"
import Navbar from "./Components/Routes/Navbar"
import Footer from "./Components/Footer"


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/navbar" element={<Navbar />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App