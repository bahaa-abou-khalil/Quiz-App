import React from "react"
import useForm from "../hooks/useForm"
import { useNavigate } from "react-router-dom"
const Register = ()=>{
    const navigate=useNavigate();
    const { form , updateForm } = useForm({
        username:"",
        password:""
    })
    return(
        <div className="login-container primary-bg flex column center">
            <h3>Register</h3>
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
            onClick={()=>navigate("/")}
            >Submit</button>
        </div>
    )
}

export default Register;