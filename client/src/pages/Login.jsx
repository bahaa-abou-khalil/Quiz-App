import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";
import useForm from "../hooks/useForm";

const Login = ()=>{
    const {form, updateForm} = useForm({
        username:"",
        password:""
    })
    const navigate=useNavigate();
    const [error, setError]=useState(false);

    const handleSubmit = (data)=>{
        
        axios.post("http://localhost:8080/auth/login", data)
        .then((res) => {
          if (res.data.message) {
            setError(true);
          }
          else{
            localStorage.setItem("token",res.data.token)
            navigate("/quizzes")
          }
        })
        .catch(() => {
          setError(true);
        });
      };

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

            {error && <p className="red-txt">unable to login</p>}

            <button className="filled-btn"
            onClick={()=>handleSubmit(form)}
            >Submit</button>

            <button className="action-btn"
            onClick={()=>navigate("/register")}
            >Sign Up</button>

        </div>
    )
}

export default Login;