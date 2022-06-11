import React from 'react';
import Scroller from './Scroller';

import family1 from '../assets/images/family/img-vitalinea-griego@2x.png';
import family2 from '../assets/images/family/img-vitalinea-sin-azucar@2x.png';
import family3 from '../assets/images/family/img-vitalinea-bebible@2x.png';
import backgroundTexture from '../assets/images/textures/bg-familia-vitalinea@2x.png'

import '../styles/ProductsFamily.scss'

const familyArray = 
[
  ["Vitalínea Griego", family1],
  ["Vitalínea Sin Azúcar", family2],
  ["Vitalínea Bebible", family3]
] 

const ProductsFamily = () => {
  return (
    <section className='ProductsFamily' style={{ backgroundImage: `url(${backgroundTexture})` }}>
      <h2>La Familia Vitalínea</h2>
      <Scroller>
        {familyArray.map(([title, img], index) => (
          <figure key={`ProductsFamily-${index}`} className="ProductsFamily__product">
            <img src={img} alt={`${title} imagen`} />
            <figcaption>{title}</figcaption>
          </figure>
        ))}
      </Scroller>
    </section>
  );
}
 
export default ProductsFamily;