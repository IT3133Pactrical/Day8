import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function Login(){

    const data=[{username:'chamith',password:'123'}]

    const [stuData, setStuData] = useState({
        username:'',
        password:''
    })

    const [error, setError] = useState(null)

    function getDetails(e) {
        setError(null)
        const {name, value} = e.target;
        setStuData((pre) => (
            {
                ...pre,
                [name]:value
            }
        ))
    }

    const navigate=useNavigate();
    function aunthenticate() {

        if(!stuData.username || !stuData.password) {
            setError('Every field is required')
        }
        else {
            const res = data.some((stu) => stu.username === stuData.username && stu.password === stuData.password)
            if(res) {
                setError(null)
                navigate('/dash')
            }
            else {
                setError('Invalied Username or Password')
            }
        }
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
                    <td><input type="text" name="username" value={stuData.username}  onChange={getDetails}/></td>
                </tr>
                <tr>
                    <td>Password:</td>
                    <td><input type="text" name="password" value={stuData.password}  onChange={getDetails}/></td>
                </tr>
            </table>
            <button onClick={aunthenticate}>Login</button>
            {
                    error ? (
                        <p>{error}</p>
                    ) : (
                        <></>
                    )
                }
        </div>
        </>
    );
}