import React from 'react';
import { Link } from 'react-router-dom';

export default function PlacesPage() {

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
                <Link to={'/account/places/new'}>Add new place</Link>
            </div>
        </div>
    )
}
