import React from "react"
import { useNavigate } from "react-router-dom";

const Login = ()=>{
    const navigate=useNavigate();
    return(
        <div className="login-container primary-bg flex column center">
            <h3>Login</h3>
            <input type="text" placeholder="username"/>
            <input type="password" placeholder="password"/>
            <button className="filled-btn"
            onClick={()=>navigate("/quizzes")}
            >Submit</button>
        </div>
    )
}

export default Login;