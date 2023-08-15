import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../components/userContext';
import { Link, Navigate } from 'react-router-dom';

export default function Account() {
  const { ready, user } = useContext(UserContext);

  if (!ready) {
    return 'Loading...'
  }

  if (ready && !user) {
    return <Navigate to={'/Login'} />
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
    </div>
  )
}
