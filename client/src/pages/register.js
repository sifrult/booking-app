import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import axios from "axios";

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    async function registerUser(ev) {
        ev.preventDefault();

        try {
            await axios.post('/register', {
                name,
                email,
                password
            });
            alert('Registration successful. Now you can log in.')
        } catch (e) {
            alert('Registration failed.')
        }
    }

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={registerUser}>
                <input type='text'
                    placeholder='John Doe'
                    value={name}
                    onChange={ev => setName(ev.target.value)} />
                <input type='email'
                    placeholder='your@email.com'
                    value={email}
                    onChange={ev => setEmail(ev.target.value)} />
                <input type='password'
                    placeholder='password'
                    value={password}
                    onChange={ev => setPassword(ev.target.value)} />
                <button>Register</button>
                <div>
                    Already a member? <Link to={'/login'}>Login</Link>
                </div>
            </form>

        </div>
    );
}
