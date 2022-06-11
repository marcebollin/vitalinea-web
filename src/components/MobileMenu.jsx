import React from 'react';
import '../styles/MobileMenu.scss'

const MobileMenu = ({ children }) => {
  return (
    <div className='MobileMenu'>
      <input type="checkbox" className="MobileMenu__check" />
      
      <span className='MobileMenu__line'></span>
      <span className='MobileMenu__line'></span>
      <span className='MobileMenu__line'></span>

      <div className='MobileMenu__content'>
        {children}
      </div>
    </div>
  );
}
 
export default MobileMenu;