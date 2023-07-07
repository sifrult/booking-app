import React from 'react';
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <input type='email' placeholder='your@email.com' />
        <input type='password' placeholder='password' />
        <button>Login</button>
        <div>
          Don't have an account yet? <Link to={'/register'}>Register now</Link>
        </div>
      </form>

    </div>
  );
}
