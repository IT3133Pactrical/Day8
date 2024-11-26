import { useNavigate } from "react-router-dom";

export default function Login(){
    const navigate=useNavigate();
    const aunthenticate=()=>{
        navigate('/dash')
    }
    return(
        <div>
            <h1>Login here</h1>
            <button>Login</button>
        </div>
    );
}