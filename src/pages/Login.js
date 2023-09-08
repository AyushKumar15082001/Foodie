import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Styles from "../css/Auth.module.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post('/api/auth/login', { email: email.toLowerCase(), password }).then(res => {
      localStorage.setItem('token', res.data);
      navigate('/home');

    }).catch(err => {
      setError(err.response.data);
    });
  };
  const handleChange = (e) => {
    if (e.target.name === "email") setEmail(e.target.value);
    if (e.target.name === "password") setPassword(e.target.value);
    setError("");
  };

  return (
    <div className={Styles.formContainer}>
      <form onSubmit={handleSubmit} className={Styles.form} >
        <h1>Login</h1>
        <div className={Styles.inputContainer}>
          <input
            type="email"
            placeholder="email"
            autoComplete="email"
            name="email"
            required
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className={Styles.inputContainer}>
          <input
            type="password"
            placeholder="password"
            autoComplete="current-password"
            name="password"
            required
            value={password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Login</button>
        {error && <p className={Styles.error}>{error}</p>}
        <p>Don't have an account? <Link to="/signup">Create one</Link></p>
      </form>
    </div>
  );
}
export default Login;