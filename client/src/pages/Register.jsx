import React, {useState} from "react"
import useForm from "../hooks/useForm"
import { useNavigate } from "react-router-dom"
import axios from "axios"
const Register = ()=>{
    const navigate=useNavigate();
    const { form , updateForm } = useForm({
        username:"",
        password:""
    })

    const [error,setError] = useState(false);

    const handleRegister = (data)=>{
        if(!data.username || !data.password){
            setError(!error)
            return
        }
        axios.post("http://localhost:8080/auth/register", data)
        .then((res) => {
          if (res.data.message) {
            setError(true);
          }
          else{
            navigate("/")
          }
        })
        .catch(() => {
          setError(true);
        });
      };

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

            {error && <p className="red-txt">unable to register</p>}


            <button className="filled-btn"
            onClick={()=>handleRegister(form)}
            >Submit</button>

        </div>
    )
}

export default Register;