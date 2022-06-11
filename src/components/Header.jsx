import React, { useEffect, useState } from 'react';
import LogoVitalinea from './LogoVitalinea';
import MobileMenu from './MobileMenu';

import '../styles/Header.scss'
import NavBar from './NavBar';

const Header = () => {
  const [width, setWidth] = useState(window.screen.width)
  useEffect(() => {
    const handleResize = () => setWidth(window.screen.width)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [width])

  return (
    <header className='Header'>
      <LogoVitalinea />
      {
        width < 900 
        ? (
            <MobileMenu>
              <NavBar type="mobile"/>
            </MobileMenu>
          )
        : <NavBar></NavBar>
      }
    </header>
  );
}
 
export default Header;