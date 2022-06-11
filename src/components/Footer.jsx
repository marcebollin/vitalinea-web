import React from 'react';
import danoneLogo from '../assets/icons/img-logo-danone@2x.png'
import vitalineaLogo from '../assets/icons/img-logo-footer@2x.png'

import '../styles/Footer.scss'

const Footer = () => {
  return (
    <footer className='Footer'>
      <div className='Footer__brands'>
        <img src={danoneLogo} alt="Danone logo" />
        <img src={vitalineaLogo} alt="Danone vitalínea logo" />
      </div>
      <nav className='Footer__law'>
        <ul>
            <li>
              <a href="/">Términos y condiciones</a>
            </li>
            <li>
              <a href="/">Políticas de privacidad</a>
            </li>
            <li>
              <a href="/">Aviso de privacidad</a>
            </li>
        </ul>
      </nav>
      <p className='Footer__copyright'>Danone de México 2017 ©. Todos los derechos reservados 2017</p>
    </footer>
  );
}
 
export default Footer;