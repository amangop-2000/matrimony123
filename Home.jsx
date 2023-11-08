import { useEffect, useState } from "react"
import { Link, Outlet, useParams } from "react-router-dom"
import axios from "axios"

const Home=()=>{
    let[content,setcontent]=useState([])
   let obj=useParams()
   console.log(obj)
    useEffect(()=>{
        axios.get(`http://localhost:5000/home/${obj._id}`)
        .then((response)=>{setcontent(response.data)})
        .catch(()=>{console.log("error2")})
       
    },[])
    let deletedata=(id)=>{
        axios.delete(`http://localhost:5000/home/${obj._id}`)
        window.location.assign("/login")
    }
    console.log(content)
    return(
        <div>
            <h1>Hello!! {content.name}</h1>
            <button><Link to={`/home/${obj._id}/edit`}>Edit</Link></button>
            <button onClick={()=>{deletedata(obj._id)}}>Delete</button>
            <button><Link to={`/login`}>Sign out</Link></button>
            <button><Link to={`/home/${obj._id}/profile`}>Check your match</Link></button>
            <Outlet></Outlet>
        </div>
        
    )
}
export default Home