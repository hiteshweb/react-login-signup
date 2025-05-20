import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Completed from './pages/Completed';
import { isAuthenticated, logoutUser, saveUser } from './utils/auth';
import PrivateRoute from './guards/PrivateRoute';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about-us">About us</Link> | 
        <Link to="/completed">Completed</Link> | 
        {isAuthenticated() ? (<button onClick={() => { logoutUser(); window.location.reload(); }}>Logout</button>
        ) : (<><Link to="/login">Login</Link> | 
        <Link to="/signup">Signup</Link></>)}
      </nav>
      <Routes>
        <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>}></Route>
        <Route path="/about-us" element={<About />}></Route>
        <Route path="/completed" element={<PrivateRoute><Completed /></PrivateRoute>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </Router>
  )
}

export default App
