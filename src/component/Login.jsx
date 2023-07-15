import React from "react";
import "../component/Login.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const navigate=useNavigate();
    function hlogin(){
        console.log("login button");
    }
    const hsignup = () => {
        navigate("/signup");
    }
    return(
    <>
    <div className="Logincard">
        <h1>LOGIN</h1>
        <div className="inputs">
        <input type="text" placeholder="Enter Name" className="Nameinput"/>
        <input type="password" placeholder="Enter Password" className="Passwordinput"/>
        </div>
        
    </div>
    <div className="buttons">
        <button className="logIn" onClick={hlogin}>login</button>
        <button className="signup" onClick={hsignup}>signup</button>
    </div>
    </>
)

}
export default Login;