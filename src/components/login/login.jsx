import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";


export function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [emailerror, setEmailerror] = useState("");
    const [passworderror, setPassworderror] = useState("");

    let navigate = useNavigate();

    function handleEmail(e) {
        setEmail(e.target.value);
    }
    function handlePassword(e) {
        setPassword(e.target.value);
    }

    function handleLogin() {
     if(email==""){
        setEmailerror("Email required");
     }else if(!email.includes("@")){
        setEmailerror("Please include @")
     }else if (email !== localStorage.getItem('Email')) {
        setEmailerror("User not found. Please register.");
    } else {
        setEmailerror(""); 
     
    }

    if(password==""){
        setPassworderror("Password required");
    }else if(password!==localStorage.getItem('Password')){
        setPassworderror("User not found. Please register.")
    }else{
        setPassworderror("");
        navigate("/");
    }
    }
    return (
        <div className="login-container">
            <div className="login-form">
                <div className="login-logo">
                    <img src="../../../images/logo-cart.jpg" />
                    <span>ShopNow</span>
                </div>
                <div className="login-data">
                    <div>
                        <div className="mt-2 mb-2">Email Address</div>
                        <input type="email" placeholder="Enter Email" className="form-control" onChange={handleEmail} />
                        <div className="text-danger">{emailerror}</div>
                    </div>
                    <div>
                        <div className="mt-2 mb-2">Password</div>
                        <input type="password" placeholder="Enter Password" className="form-control" onChange={handlePassword} />
                        <div className="text-danger">{passworderror}</div>
                    </div>
                    <div>

                        <button className="btn mt-4 w-100" style={{ backgroundColor: "orange", color: "white" }} onClick={handleLogin}>
                            Login
                        </button>

                    </div>
                    <div>
                        <Link to={"/Register"}>Don't have an account?Register</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}