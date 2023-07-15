import React from "react";
import "../component/Signup.css";
import { useNavigate } from "react-router-dom";
const Signup = () => {
    const navigate=useNavigate();
    const hlogin =() =>{
        navigate("/")
    }
    
    
    return(
    <>
    <div className="Logincard">
        <h1>SIGNUP</h1>
        <div className="inputs">
        <input type="text" placeholder="Enter Name" className="Nameinput"/>
        <input type="password" placeholder="Enter Password" className="Passwordinput"/>
        </div>
        
    </div>
    <div className="buttons">
        <button className="logIn" onClick={hlogin}>login</button>
        <button className="signup">signup</button>
    </div>
    </>
)

}
export default Signup;