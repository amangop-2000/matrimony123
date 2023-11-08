import { Link,useParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useEffect,useState } from 'react';
import axios from 'axios';
const Main = ()=>{
    let[content,setcontent]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:5000/main")
        .then((response)=>{setcontent(response.data);})//response from server is meant by response
        .catch(()=>{console.log("error");})
    },[])
      return(
        <div >
          <h1>Welcome to .com</h1>
            {content.map((x)=>{
                return(
                    <div>
                    <table>
                       <tr>
                        <td>Name:</td>
                        <td>{x.name}</td>
                       </tr>
                       <tr>
                        <td>Age:</td>
                        <td>{x.age}</td>
                       </tr>
                       <tr>
                        <td>Gender:</td>
                        <td>{x.gen}</td>
                       </tr>
                       <tr>
                        <td>Religion :</td>
                        <td>{x.rel}</td>
                       </tr>
                       <tr>
                        <td>Profession :</td>
                        <td>{x.pro}</td>
                       </tr>
                       <tr>
                        <td>Location :</td>
                        <td>{x.loc}</td>
                       </tr>
                       <tr>
                        <td>Interest :</td>
                        <td>{x.inte}</td>
                       </tr>
                       <tr>
                        <td>About :</td>
                        <td>{x.abo}</td>
                       </tr>
                       <tr>
                        <td><button><Link to={`/login`}>Chat</Link></button></td>
                       </tr>
                      </table>
            
             </div>
           )
            
         })}
         <Outlet></Outlet>
                    </div>
                )
        
}
export default Main