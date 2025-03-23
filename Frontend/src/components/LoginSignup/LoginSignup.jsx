import React, { useState } from "react"
import './LoginSignup.css'

export default function LoginSignup () {

    const [action, setAction] = useState("Login");

    return (
        <div className="container1">
            <div className="header1">
                <div className="text"><i class="fa-solid fa-pen-to-square"></i>Sign Up/Login</div>
                
            </div>
            <div className="inputs">
                {action === "Login" ? <div></div> : <div className="input">
                    <input type="text" placeholder="First Name"/>
                </div>}
                
            </div>

            <div className="inputs">
                {action === "Login" ? <div></div> : <div className="input">
                    <input type="text" placeholder="Last Name"/>
                </div>}
                
            </div>

            <div className="inputs">
                <div className="input">
                    <i className="fa-solid fa-envelope"></i>
                    <input type="email" placeholder="Email Id"/>
                </div>
            </div>

            <div className="inputs">
                <div className="input">
                    <i className="fa-solid fa-lock"></i>
                    <input type="password" placeholder="Password"/>
                </div>
            </div>

            {action === "Sign Up" ? <div></div> : <div className="forgot-password">Forgot Password? <span>Click here</span></div>}
            
            <div className="submit-container">
                <div className={action === "Login" ? "submit2 gray":"submit2"} onClick={() => {setAction("Sign Up")}}>Sign Up</div>
                <div className={action === "Sign Up" ? "submit2 gray":"submit2"} onClick={() => {setAction("Login")}}>Login</div>
            </div>
        </div>
    )
}

