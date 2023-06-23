import React from 'react';
import { CiLocationArrow1, CiMenuBurger, CiUser } from "react-icons/ci";

export default function Header() {

    return (

        <header className='flexCenter'>
            <div>
                <CiLocationArrow1 />
                airbna
            </div>

            <div className='flexCenter searchSpace'>
                <div>
                    Anywhere
                </div>
                <div>|</div>
                <div>
                    Any week
                </div>
                <div>|</div>
                <div>
                    Add guests
                </div>
                <button>
                    Search
                </button>
            </div>

            <div>
                <CiMenuBurger />
                <CiUser />
            </div>

        </header>

    );
}
