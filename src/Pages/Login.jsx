
import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import './Login.css'; 
import icon from "../images/Frame 444.png"

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
 const navigate = useNavigate();
  const validate = () => {
    const errors = {};
    if (!email) errors.email = alert("Email Is Required");
    if (!password) errors.password = alert("Password Is Required");
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      
      console.log({ email, password });
      navigate('/Home'); 
    }
  };

  return (<div className='body'>

  
    <form onSubmit={handleSubmit} className="login-form">
      <h2>Login</h2>
      <p>By signing in you agree to our <a href="#">Terms</a> and <a href="#">Privacy policy</a></p>
      <div>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <span>{errors.password}</span>}
      </div>
      <div className="options">
        <label>
          <input type="checkbox" />
          Remember password
        </label>
        <a href="#">Forget password</a>
      </div>
      <button type="submit">Login</button>
      <div className="social-login">
        <p>or connect with</p>
       <div className='image-icon'>
      <img src={icon} height={100}></img>
       </div>
      </div>
    </form>
    </div>
  );
};

export default Login;
