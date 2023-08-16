import React from 'react';
import { CiUser, CiCircleList, CiHome } from "react-icons/ci";
import { Link } from 'react-router-dom';


export default function ProfileNav() {
    return (
        <nav>
        <Link to={'/account'}><CiUser />Profile</Link>
        <br />
        <Link to={'/account/bookings'}><CiCircleList />My bookings</Link>
        <br />
        <Link to={'/account/places'}><CiHome />My places</Link>
    </nav>
    );
}
