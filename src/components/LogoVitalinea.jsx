import React from 'react';
import logo from '../assets/images/logo/logo-vitalinea.png'
import logo2x from '../assets/images/logo/logo-vitalinea@2x.png'
import logo3x from '../assets/images/logo/logo-vitalinea@3x.png'
import '../styles/LogoVitalinea.scss'

const LogoVitalinea = () => {
  return (
    <img 
      className='LogoVitalinea'
      src={logo}
      srcSet={`${logo2x} 2x, ${logo3x} 3x`}
      alt="Vitalinea logo"
    />
  );
}
 
export default LogoVitalinea;