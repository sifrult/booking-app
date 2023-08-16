import React from 'react';
import { useContext } from "react";
import { UserContext } from '../components/userContext';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Account() {
  const navigate = useNavigate();
  const { ready, user, setUser } = useContext(UserContext);

  if (!ready) {
    return 'Loading...'
  }

  if (ready && !user) {
    return <Navigate to={'/Login'} />
  }

  async function logout() {
    await axios.post('/logout');
    navigate('/', { replace: true });
    setUser(null);
  }

  return (
    <div>
      <nav>
        <Link to={'/account'}>Profile</Link>
        <br />
        <Link to={'/account/bookings'}>My bookings</Link>
        <br />
        <Link to={'/account/places'}>My places</Link>
      </nav>
      <div>
        Logged in as {user.name} ({user.email})
        <br />
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  )
}
