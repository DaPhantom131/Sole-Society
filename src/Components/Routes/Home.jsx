import React from "react"
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <React.Fragment>

            <main>

                 <video src="/Assets/Video/hero.mp4" muted loop  autoPlay playsInline width={"100%"}></video> 

                <div className="hero-content">
                    <h1>Welcome to Sole Society</h1>
                    <p>Find Your Perfect Pair, doesn't matter the size cause we've got em</p>

                    <button className="h-btn">
                        <Link to={"/shop"} className="h-btn">Shop Now</Link>
                        </button>
                </div>

            </main>

            <div className="hero-text">Sneakers Gallery</div>

         <div className="hero-grid-layout">

            <div className="grid-card"> <img src="/Assets/Image/hero.avif" alt="" /></div>

                <div className="grid-card"><img src="/Assets/Image/hero2.avif" alt="" /></div>

                <div className="grid-card"><img src="/Assets/Image/hero3.avif" alt="" /></div>

                <div className="grid-card"><img src="/Assets/Image/hero4.jpg" alt="" /></div>
                <div className="grid-card"><img src="/Assets/Image/hero5.jpg" alt="" /></div>
                <div className="grid-card"><img src="/Assets/Image/hero6.jpg" alt="" /></div>
                <div className="grid-card"><img src="/Assets/Image/hero7.jpg" alt="" /></div>
                <div className="grid-card"><img src="/Assets/Image/hero8.jpg" alt="" /></div>
                <div className="grid-card"><img src="/Assets/Image/hero9.jpg" alt="" /></div>
                <div className="grid-card"><img src="/Assets/Image/hero10.jpg" alt="" /></div>
                <div className="grid-card"><img src="/Assets/Image/hero11.jpg" alt="" /></div>
                <div className="grid-card"><img src="/Assets/Image/hero12.jpg" alt="" /></div>

        </div> 


        </React.Fragment>
    )
}

export default Home