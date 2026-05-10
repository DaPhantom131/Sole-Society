import React from "react"

const SneakerCard = (props) => {

    const { image, name, brand, price } = props

    if (!name) return null

    return (
        <div className="sneaker-card">

            <div className="sneaker-card-img-wrapper">
                <img
                    src={image}
                    alt={name}
                    className="sneaker-card-img"
                />
            </div>

            <div className="sneaker-card-info">
                <p className="sneaker-card-brand">{brand}</p>
                <h3 className="sneaker-card-name">{name}</h3>
                <p className="sneaker-card-price">{price}</p>
            </div>

            <button className="sneaker-card-btn">
                Add to Cart
            </button>

        </div>
    )
}

export default SneakerCard