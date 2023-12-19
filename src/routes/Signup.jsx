import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const [salonName, setSalonName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      setError(null);

      // يمكنك إضافة المزيد من التحقق هنا إذا لزم الأمر

      const response = await axios.post(
        "https://backendwoorkapp-r6u1.vercel.app/api/user/signup",
        { salonName, userName, password }
      );

      localStorage.setItem("user", JSON.stringify(response.data));
      navigate("/");
      window.location.reload(false);
    } catch (error) {
      setError("Please fill out all fields");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div id='signup'>
        <h1>Create Account</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="salonName">Salon Name:</label>
            <input
              type="text"
              id="salonName"
              name="salonName"
              placeholder="Enter your salon name"
              value={salonName}
              onChange={(e) => setSalonName(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="userName">Your Name:</label>
            <input
              type="text"
              id="userName"
              name="userName"
              placeholder="Enter your name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button disabled={isLoading} type="submit">
            Sign Up
          </button>
        </form>
       
        <Link to="/Signin">Sign in</Link>
      </div>
    </div>
  );
};

export default Signup;