import React, { useEffect,useState } from 'react'

import {useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
const Edit=()=> {
    let[name,setname]=useState("")
    let[age,setage]=useState("")
    let[gen,setgen]=useState("")
    let[rel,setrel]=useState("")
    let[abo,setabo]=useState("")
    let[inte,setinte]=useState("")
    let [pro,setpro]=useState("")
    let[loc,setloc]=useState("")
    let[pass,setpass]=useState("")
    let namedata=(a)=>{
        setname(a.target.value)
    }
    let locdata=(a)=>{
        setloc(a.target.value)
    }
    let agedata=(a)=>{
        setage(a.target.value)
    }
    let reldata=(a)=>{
        setrel(a.target.value)
    }
    let gendata=(a)=>{
        setgen(a.target.value)
    }
    let prodata=(a)=>{
        setpro(a.target.value)
    }
    let intedata=(a)=>{
        setinte(a.target.value)
    }
    let abodata=(a)=>{
        setabo(a.target.value)
    }
    let passdata=(a)=>{
        setpass(a.target.value)
    }
    let navigate=useNavigate()
    let obj=useParams()
    console.log(obj);
    useEffect(()=>{
        axios.get(`http://localhost:5000/edit/${obj._id}`)
        .then((response)=>{
            console.log("Got the data",response);
            setname(response.data.name)
            setage(response.data.age)
            setpro(response.data.pro)
            setloc(response.data.loc)
            setgen(response.data.gen)
            setrel(response.data.rel)
            setpass(response.data.pass)
            setinte(response.data.inte)
            setabo(response.data.abo)
        })
        .catch(()=>{
            console.log("Error");
        })
    },[])
    let formhandle=(e)=>{
        e.preventDefault()
        let userdata={
            name:name,
            age:age,
            gen:gen,
            rel:rel,
            pro:pro,
            loc:loc,
            inte:inte,
            abo:abo,
            pass:pass
        }
        axios.put(`http://localhost:5000/edit/${obj._id}`,userdata)
        .then(()=>{
            console.log("Data successfully updated");
        })
        .catch(()=>{
            console.log("errror");
        })
        navigate(`/home/${obj._id}`)
    }
  return (
    <div >
                        <table>
                            <tr>
                                <td>Name :</td>
                                <td><input type="text" value={name} onChange={namedata} /></td>
                            </tr>
                            <tr>
                                <td>Age :</td>
                                <td><input  type="text" value={age} onChange={agedata} /></td>
                            </tr>
                            <tr>
                                <td>Gender :</td>
                                <td><input  type="text" value={gen} onChange={gendata} /></td>
                            </tr>
                            <tr>
                                <td>Religion :</td>
                                <td><input  type="text" value={rel} onChange={reldata} /></td>
                            </tr>
                            <tr>
                                <td>Profession :</td>
                                <td><input  type="text" value={pro} onChange={prodata} /></td>
                            </tr>
                            <tr>
                                <td>Location :</td>
                                <td><input  type="text" value={loc} onChange={locdata} /></td>
                            </tr>
                            <tr>
                                <td>Interest :</td>
                                <td><input  type="text" value={inte} onChange={intedata} /></td>
                            </tr>
                            <tr>
                                <td>About :</td>
                                <td><input  type="text" value={abo} onChange={abodata} /></td>
                            </tr>
                            <tr>
                                <td>Password :</td>
                                <td><input  type="password" value={pass} onChange={passdata} /></td>
                            </tr>
                            <tr>
                                <td><button onClick={formhandle}>Update</button></td>
                            </tr>
                        </table>

    </div>
  )
}

export default Edit