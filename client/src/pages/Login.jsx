import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import useForm from "../hooks/useForm";

const Login = ()=>{
    const {form, updateForm} = useForm({
        username:"",
        password:""
    })
    const navigate=useNavigate();

    return(
        <div className="login-container primary-bg flex column center">
            <h3>Login</h3>
            <input type="text" placeholder="username"
            value={form.username}
            name="username"
            onChange={updateForm}
            />
            <input type="password" placeholder="password"
            value={form.password} 
            name="password"
            onChange={updateForm}
            />
            <button className="filled-btn"
            onClick={()=>navigate("/quizzes")}
            >Submit</button>
        </div>
    )
}

export default Login;