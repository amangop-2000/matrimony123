import Register from "./Marriage/Register"
import {BrowserRouter,Routes,Route} from  "react-router-dom"
import Login from "./Marriage/Login"
import Home from "./Marriage/Home"
import Edit from "./Marriage/Edit"
import Main from "./Marriage/Main"
import Profile from "./Marriage/Profile"
const App=()=>{
    return(
       <div>
        <BrowserRouter>
        <Routes> 
            <Route element={<Main/>} path="/main"></Route>  
            <Route element={<Login/>} path="/login"></Route>
            <Route element={<Register/>} path="/register"></Route>
            <Route element={<Home/>} path="/home/:_id">
              
                <Route element={<Edit/>} path="/home/:_id/edit"/>
                <Route element={<Profile/>} path="/home/:_id/profile"/>
            </Route>
        </Routes>
        </BrowserRouter>
       </div> 
    )
}
export default App