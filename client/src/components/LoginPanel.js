import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
//import { baseUrl } from './config';
import { UserContext } from './UserContext';

const LoginPanel = (props) => {
    const { login, authToken } = useContext(UserContext);
    const [email, setEmail] = useState('demo1@example.com');
    const [password, setPassword] = useState('password');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("/api/users/token", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            password,
          }),
        });

        if (response.ok) {
            const { token } = await response.json();
            login(token);
            props.history.push('/');
        }
    };

    const updateEmail = (e) => setEmail(e.target.value);
    const updatePassword = (e) => setPassword(e.target.value);

    return (
        <main className="centered middled">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Email" value={email} onChange={updateEmail} />
                <input type="password" placeholder="Password" value={password} onChange={updatePassword} />
                <button type="submit">Login</button>
            </form>
        </main>
    );
};

export default LoginPanel;
