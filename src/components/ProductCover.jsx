import React from 'react';
import Button from './Button';
import FlavorsList from './FlavorsList';

// mobile strawberries
import topLeftStrawberry from '../assets/images/flavors/strawberry/img-fresas-8.png'
import topRightStrawberry from '../assets/images/flavors/strawberry/img-fresas-3.png'

// desktop strawberries
import deskTopLeftStrawberry from '../assets/images/flavors/strawberry/img-fresas-9.png'
import deskTopRightStrawberry from '../assets/images/flavors/strawberry/img-fresas-2.png'

import kcalCertificate from '../assets/icons/img-100-kcal.png'
import diabetesCertificate from '../assets/icons/img-sello-avalado.png'
import downArrow from '../assets/icons/flecha.svg'

import '../styles/ProductCover.scss'

const mobileStrawberries = 
[
  ["ProductCover__top-right-strawberry-mobile", topLeftStrawberry],
  ["ProductCover__top-left-strawberry-mobile", topRightStrawberry]
]

const desktopStrawberries = 
[
  ["ProductCover__top-left-strawberry", deskTopLeftStrawberry],
  ["ProductCover__top-right-strawberry", deskTopRightStrawberry],
  ["ProductCover__bottom-right-strawberry", deskTopLeftStrawberry]
]

const ProductCover = ({ flavor, setFlavor, flavors }) => {
  const {
    img,
    flavorName,
    productName,
  } = flavor 

  return (
    <section className='ProductCover'>
      {mobileStrawberries.map(([className, url], index) => (
        <img
          className={`strawberry-decoration ${className} mobile-strawberry`}
          src={url}
          alt="Fresa de decoración"
          key={`StrawberryMobile-${index}`}
        />
      ))}

      {desktopStrawberries.map(([className, url], index) => (
        <img
          className={`strawberry-decoration ${className} desktop-strawberry`}
          src={url}
          alt="Fresa de decoración"
          key={`StrawberryDesktop-${index}`}
        />
      ))}

      <img 
        className='ProductCover__image'
        src={img} 
        alt={`${flavorName} imágen`} 
      />

      <FlavorsList flavors={flavors} setFlavor={setFlavor}/>
      
      <article className='ProductCover__description'>
        <h1>{productName}</h1>
        <p>"¡La presentación ideal para llevar contigo! Vitalínea bebible es la opción si eres de las personas que siempre están activas y quieren probar algo sano, rico y práctico."</p>
        <Button type={"primary"}>Comprar en Walmart</Button>
      </article>

      <div className='ProductCover__certificates'>
        <img src={diabetesCertificate} alt="Menos de 100kcal certificado" />
        <img src={kcalCertificate} alt="Aval de la federación mexicana de diabetes" />
      </div>

      <a 
        href="#NutritionalInfo" 
        className='ProductCover__down-arrow' 
        style={{ backgroundImage: `url('${downArrow}')` }}>
      </a>
    </section>
  );
}
 
export default ProductCover;