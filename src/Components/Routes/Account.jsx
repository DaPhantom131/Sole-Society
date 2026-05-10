import React from "react";
import "./Account.css"

const Account = () => {
    return(

        <React.Fragment>

            <div className="login-page">
                <div className="login-wrapper">
            <form action="" className="login-form">

                <div className="form-group">
                    <label>UserName or Email</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your username"
                        className="form-input"
                        required
                    />
                </div>

                <div className="form-group">

                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    className="form-input"
                    required
                />
            </div>

                <button type="submit" className="login-btn">Login</button>

                <p>dont have an account? sign up</p>

            </form>
                </div>
            </div>
        </React.Fragment>

    )
}

export default Account