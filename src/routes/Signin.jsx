import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      setError(null);

      const response = await axios.post(
        "https://backendwoorkapp-r6u1.vercel.app/api/user/login",
        { username, password }
      );

      localStorage.setItem("user", JSON.stringify(response.data));
      navigate("/");
      window.location.reload(false);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError("Please fill out the right credentials");
    }
  };

  return (
    <form className="login-container" onSubmit={handleSubmit}>
      <div id='signin'>
        <h1>Welcome back</h1>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button><Link to="/components/AddCardForm" style={{ textDecoration: 'none', color: 'white'  }}>Sign in</Link>

        </button>
        <br/>

        
        <Link to="/Signup" style={{ textDecoration: 'none', color: 'white' }}>
          Sign up
         </Link>

        
        {error && <div className="error">{error}</div>}
        
        
        
      
      </div>
      
    </form>
  );
};

export default Signin;