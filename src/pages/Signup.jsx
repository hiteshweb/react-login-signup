import { useState } from "react";
import { saveUser } from "../utils/auth";
import { Navigate, useNavigate } from "react-router-dom";

const Signup = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();
    const signup = () => {
        if(!username || !password){
            alert('Please fill mandatory fields.');
        } else {
            saveUser({username: username, password: password});
            alert('user created successfully.');
            navigate('/login');
        }
    }
    return (
        <>
            <div>
                <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button type="button" onClick={signup}>Signup</button>
            </div>
        </>
    );
};

export default Signup;