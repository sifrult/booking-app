import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../components/userContext';
import { Navigate } from 'react-router-dom';

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
      Account for {user?.name}
    </div>
  )
}
