import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import MobileFooter from '../components/mobileFooter';
import DesktopFooter from '../components/desktopFooter';

export default function Home() {
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
    <>
      <Header />
      {isMobile ? <MobileFooter /> : <DesktopFooter />}
    </>
  )
}
