import React from 'react';
import { CiCirclePlus } from "react-icons/ci";
import { Link } from 'react-router-dom';
import ProfileNav from '../components/profileNav';

export default function PlacesPage() {

    return (
        <div>
            <ProfileNav />
            <br />
            <div>
                <Link to={'/account/places/new'}><CiCirclePlus />Add new place</Link>
            </div>
        </div>
    )
}
