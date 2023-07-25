import React, { useContext } from 'react';
import {
    CiLocationArrow1,
    CiMenuBurger,
    CiUser,
    CiSearch,
    CiSliderHorizontal
} from "react-icons/ci";
import { Link } from 'react-router-dom';
import { UserContext } from './userContext';

export default function Header() {

    const { user } = useContext(UserContext)

    return (

        <header className='flexCenter'>
            <div className='desktopOnly'>
                <CiLocationArrow1 />
                airbna
            </div>

            <div className='flexCenter mobileSearchSpace mobileOnly'>
                <div>< CiSearch /></div>
                <div>
                    <p>Anywhere</p>
                    <p>Any week - Add guests</p>
                </div>
                <div className='filterBtn'><CiSliderHorizontal /></div>
            </div>

            <div className='flexCenter searchSpace desktopOnly'>
                <div>Anywhere</div>
                <div>|</div>
                <div>Any week</div>
                <div>|</div>
                <div>Add guests</div>
                <button>Search</button>
            </div>

            <Link to='/login'>
                <div className='desktopOnly'>
                    <CiMenuBurger />
                    <CiUser />
                    {!!user && (
                        <div>
                            {user.name}
                        </div>
                    )}
                </div>
            </Link>

        </header>

    );
}
