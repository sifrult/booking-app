import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom'
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  async function handleLoginSubmit(ev) {
    ev.preventDefault();
    try {
      await axios.post('/login', { email, password });
      alert('Login successful');
      setRedirect(true);
    } catch (e) {
      alert('Login failed');
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLoginSubmit}>
        <input type='email'
          placeholder='your@email.com'
          value={email}
          onChange={ev => setEmail(ev.target.value)} />
        <input type='password'
          placeholder='password'
          value={password}
          onChange={ev => setPassword(ev.target.value)} />
        <button>Login</button>
        <div>
          Don't have an account yet? <Link to={'/register'}>Register now</Link>
        </div>
      </form>

    </div>
  );
}
