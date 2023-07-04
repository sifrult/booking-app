import React, { useEffect, useState } from 'react';
import { CiSearch, CiHeart, CiUser } from "react-icons/ci";
import { Link } from 'react-router-dom';

export default function MobileFooter() {
    const [isVisible, setIsVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const isVisible = prevScrollPos > currentScrollPos;
            setIsVisible(isVisible);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <footer className={`mobileFooter ${isVisible ? 'visible' : 'hidden'}`}>
            <div className='flexCenter'>
                <div>
                    <CiSearch />
                    <p>Explore</p>
                </div>
                <div>
                    <CiHeart />
                    <p>Wishlists</p>
                </div>
                <Link to='/login'>
                    <div>
                        <CiUser />
                        <p>Login</p>
                    </div>
                </Link>
            </div>
        </footer>
    );
}
