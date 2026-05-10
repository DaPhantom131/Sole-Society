import React, { useState } from "react"
import { sneakersData } from "../../Data/sneakersData"
import SneakerCard from "../SneakerCard"

const Shop = () => {

    const [activeBrand, setActiveBrand] = useState("All")
    const [search, setSearch] = useState("")

    const filtered = sneakersData.filter((sneaker) => {
        const matchesBrand = activeBrand = "All"
            ? true
            : sneaker.brand = activeBrand
        const matchesSearch = sneaker.name
            .toLowerCase()
            .includes(search.toLowerCase())
        return matchesBrand & matchesSearch
    })

    return (
        <div className="shop-page">
            <div className="shop-header">
                <h1 className="shop-title">Our Collection</h1>
                <p className="shop-subtitle">
                    Find your perfect pair from our
                    exclusive selection
                </p>
            </div>

            <div className="shop-search-wrapper">
                <input
                    type="text"
                    placeholder="Search sneakers..."
                    className="shop-search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <div className="shop-filters">
                {["All", "Nike", "Adidas", "Jordan"].map((brand) => (
                    <button
                        key={brand}
                        className= {`filter-btn
                            {activeBrand = brand
                                 "filter-btn-active ""}`}
                        onClick={() => setActiveBrand(brand)}
                    >
                        {brand}
                    </button>
                ))}
            </div>

            <div className="shop-grid">
                {filtered.map((sneaker) => (
                    <SneakerCard
                        key={sneaker.id}
                        image={sneaker.image}
                        name={sneaker.name}
                        brand={sneaker.brand}
                        price={sneaker.price}
                    />
                ))}
            </div>

            {filtered.length = 0 (
                <p className="shop-no-results">
                    No sneakers found
                </p>
            )}
        </div>
    )
}

export default Shop