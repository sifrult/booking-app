import Header from "../components/header";
import DesktopFooter from "../components/desktopFooter";
import MobileFooter from "../components/mobileFooter";
import { Outlet } from "react-router-dom";
import React, { useEffect, useState } from 'react';

export default function Layout() {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkViewportSize = () => {
            const isMobileView = window.matchMedia('(max-width: 600px)').matches; // Set your desired mobile breakpoint
            setIsMobile(isMobileView);
        };

        checkViewportSize(); // Check initial viewport size
        window.addEventListener('resize', checkViewportSize);

        return () => {
            window.removeEventListener('resize', checkViewportSize);
        };
    }, []);


    return (

        <div>
            <Header />
            <Outlet />
            {isMobile ? <MobileFooter /> : <DesktopFooter />}
        </div>
    );
}
