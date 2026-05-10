import React, { useState } from "react"

const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (formData.name &&
            formData.email &&
            formData.message) {
            setSubmitted(true)
        }
    }

    return (
        <div className="contact-page">
            <div className="contact-wrapper">
                <div className="contact-left">
                    <h1 className="contact-title">Get In Touch</h1>
                    <p className="contact-subtitle">
                        Have a question about an order or
                        just want to say hello? We would
                        love to hear from you.
                    </p>
                    <div className="contact-info">
                        <div className="contact-info-item">
                            <h4>Email</h4>
                            <p>hello@solesociety.com</p>
                        </div>
                        <div className="contact-info-item">
                            <h4>Phone</h4>
                            <p>+234 800 123 4567</p>
                        </div>
                        <div className="contact-info-item">
                            <h4>Address</h4>
                            <p>123 Sole Street, Lagos</p>
                        </div>
                    </div>
                </div>

                <div className="contact-right">
                    {submitted ? (
                        <div className="contact-success">
                            <h3>Message Sent!</h3>
                            <p>
                                Thank you for reaching out.
                                We will get back to you
                                within 24 hours.
                            </p>
                        </div>
                    ) : (
                        <form
                            className="contact-form"
                            onSubmit={handleSubmit}
                        >
                            <div className="form-group">
                                <label>Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name"
                                    className="form-input"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    className="form-input"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea
                                    name="message"
                                    placeholder="Write your message"
                                    className="form-input form-textarea"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="contact-btn"
                            >
                                Send Message
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Contact