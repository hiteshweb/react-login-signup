import { useState } from "react";
import { getUser, saveUser } from "../utils/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const navigate = useNavigate();
    const loginUser = () => {
        const userInfo = JSON.parse(localStorage.getItem('user'));
        console.log('userInfo', userInfo);
        console.log('username', username);
        console.log('password', password);
        if(userInfo?.username === username && userInfo?.password === password) {
            saveUser(userInfo);
           navigate("/");
           window.location.reload();
        } else {
            alert("Invalid user credentials.");
        }
    }
    return (
        <>
            <div>
                <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button type="button" onClick={loginUser}>Login</button>
            </div>
        </>
    );
};

export default Login;