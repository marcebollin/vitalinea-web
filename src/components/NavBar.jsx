import React from 'react';
import '../styles/NavBar.scss'
import facebookIcon from '../assets/icons/img-social-facebook.svg'
import instagramIcon from '../assets/icons/img-social-instagram.svg'
import youtubeIcon from '../assets/icons/img-social-youtube.svg'

const NavBar = ({ type = "full" }) => {
  return (
    <nav className={`NavBar-${type}`}>
      <ul>
        <li><a href="/">Nuestros productos</a></li>
        <li><a href="/">Disfruta cuidarte</a></li>
        <li><a href="/">Blog</a></li>
        <li className='socials'>
          <a href="/" >
            <img src={facebookIcon} alt="Facebook"/>
          </a>
          <a href="/" >
            <img src={instagramIcon} alt="Facebook"/>
          </a>
          <a href="/" >
            <img src={youtubeIcon} alt="Facebook"/>
          </a>
        </li>
      </ul>
    </nav>
  );
}
 
export default NavBar;