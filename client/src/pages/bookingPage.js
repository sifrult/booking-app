import React from 'react';
import { Link } from 'react-router-dom';

export default function BookingPage() {

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
