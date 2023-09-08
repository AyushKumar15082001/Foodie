import React, { useState } from "react";
import Styles from "../css/Auth.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setEmail(email => email.trim());
        axios.post('/api/auth/signup', { email, password }).then(res => {
            navigate('/');
            console.log(res.data);
        }).catch(err => {
            setError(err.response.data.message.replace('User validation failed: ', ''));
            console.log(err.response.data);
        })
        setError("");
    };
    const handleChange = (e) => {
        if (e.target.name === "email") setEmail(e.target.value);
        if (e.target.name === "password") setPassword(e.target.value);
        setError("");
    };
    return (
        <div className={Styles.formContainer}>
            <form onSubmit={handleSubmit} className={Styles.form}>
                <h1>Create your account</h1>
                <div className={Styles.inputContainer}>
                    <input
                        type="email"
                        placeholder="email"
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
                        name="password"
                        title="Minimum six characters, at least one upper case English letter, one lower case English letter, one number and one special character"
                        required
                        value={password}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Create my account</button>
                {error && <p className={Styles.error}>{error}</p>}
                <p>Already have an account? <Link to="/">Login</Link></p>
            </form>
        </div>
    );
};
export default Signup;