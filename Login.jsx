import React,{ useState } from "react"
// import style from "./style.module.css"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
const Login=()=>{
    let[name,setname]=useState("")
    let[pass,setpass]=useState("")
    let navigate=useNavigate()
    let nameData=(e)=>{
        setname(e.target.value)
    }
    let passData=(e)=>{
        setpass(e.target.value)
    }
    let formhandle=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:5000/login",{name,pass})
        .then((response)=>{
            if(response.data.isThere==="success")
            {
                navigate(`/home/${response.data.userdata._id}`)
            }
            else
            {console.log(" Not a valid login");
            
            }
        })
        .catch(()=>{
            console.log("error2");
        })
    }
    return(
<div >
<div >
    <div></div>
    <div>Sign in</div>
    <div >to continue to Marry.com</div>
    <form>
        
        <label >Name</label>
        <input  type="text" value={name} onChange={nameData} placeholder="Username"/><br />
        <label >Password</label>
        <input type="password" value={pass} onChange={passData} placeholder="Password"/><br />
        
        <button  type="submit" onClick={formhandle}>Submit</button>
        <button ><Link to={`/register`}>Not a user? Register</Link></button>
    </form>
</div></div>   
)
}
export default Login