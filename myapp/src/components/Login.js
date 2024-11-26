import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function Login(){
    const[username,password]=useState();
    const navigate=useNavigate();
    const aunthenticate=()=>{
        navigate('/dash')
    }
    return(
        <>
        <div>
        
        </div>
        <div>
            <h1>Login here</h1>
            <table>
                <tr>
                    <td>Username:</td>
                    <td><input type="text" name="username" value={username}/></td>
                </tr>
                <tr>
                    <td>Password:</td>
                    <td><input type="text" name="password" value={password}/></td>
                </tr>
            </table>
            <button onClick={aunthenticate}>Login</button>
        </div>
        </>
    );
}