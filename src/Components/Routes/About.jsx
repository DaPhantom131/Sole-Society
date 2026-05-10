import React from "react"
import "./About.css"

const About = () => {
    return (
        <div className="about-page">
            <div className="about-hero">
                <h1 className="about-title">About Sole Society</h1>
                <p className="about-subtitle">
                    We are passionate about sneakers and
                    the culture that comes with them
                </p>
            </div>

            <div className="about-section">
                <div className="about-story">
                    <h2 className="about-section-title">Our Story</h2>
                    <p className="about-section-text">
                        Sole Society was founded in 2018 by a group
                        of sneaker enthusiasts who believed that
                        everyone deserves access to the best kicks
                        on the market. What started as a small
                        local store has grown into a destination
                        for sneaker lovers everywhere.
                    </p>
                    <p className="about-section-text">
                        We carry only authentic products from the
                        worlds leading brands including Nike,
                        Adidas and Jordan. Every pair we sell
                        goes through a strict quality check
                        before it reaches your hands.
                    </p>
                </div>
            </div>

            <div className="about-features">
                <h2 className="about-section-title">
                    Why Choose Us
                </h2>
                <div className="about-features-grid">
                    <div className="about-feature-card">
                        <h3>100% Authentic</h3>
                        <p>
                            Every sneaker is verified authentic
                            before we list it for sale
                        </p>
                    </div>
                    <div className="about-feature-card">
                        <h3>Free Shipping</h3>
                        <p>
                            We offer free shipping on all
                            orders above 50,000 Naira
                        </p>
                    </div>
                    <div className="about-feature-card">
                        <h3>Easy Returns</h3>
                        <p>
                            Not happy with your order?
                            Return it within 30 days
                        </p>
                    </div>
                    <div className="about-feature-card">
                        <h3>Best Prices</h3>
                        <p>
                            We guarantee the best prices
                            on all our products
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About