import React from 'react';
import { useContext } from "react";
import { UserContext } from '../components/userContext';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import ProfileNav from '../components/profileNav';
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
      <ProfileNav />
      <br />
      <div>
        Logged in as {user.name} ({user.email})
        <br />
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  )
}
