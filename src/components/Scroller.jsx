import React from 'react';
import '../styles/Scroller.scss'

const Scroller = ({ children }) => {
  return (
    <div className='Scroller'>
      {children}
    </div>
  );
}
 
export default Scroller;