import React from 'react';

// Mobile Strawberries
import centerLeftStrawberry from '../assets/images/flavors/strawberry/img-fresas-7.png';
import topRightStrawberry from '../assets/images/flavors/strawberry/img-fresas-6.png';

// Desktop Strawberries
import deskTopLeftStrawberry from '../assets/images/flavors/strawberry/img-fresas-4.png';
import deskCenterLeftStrawBerry from '../assets/images/flavors/strawberry/img-fresas-5.png'
import deskBottomCenterStrawBerry from '../assets/images/flavors/strawberry/img-fresas-9.png'
import deskBottomRightStrawberry from '../assets/images/flavors/strawberry/img-fresas-8.png'

import '../styles/NutritionalInfo.scss'

const mobileStrawberries = 
[
  ["NutritionalInfo__center-left-strawberry-mobile", centerLeftStrawberry],
  ["NutritionalInfo__top-right-strawberry-mobile", topRightStrawberry]
]

const desktopStrawberries = 
[
  ["NutritionalInfo__top-left-strawberry", deskTopLeftStrawberry],
  ["NutritionalInfo__center-left-strawberry", deskCenterLeftStrawBerry],
  ["NutritionalInfo__bottom-left-strawberry", centerLeftStrawberry],
  ["NutritionalInfo__bottom-center-strawberry", deskBottomCenterStrawBerry],
  ["NutritionalInfo__bottom-right-strawberry", deskBottomRightStrawberry],
  ["NutritionalInfo__center-right-strawberry", topRightStrawberry],
]


const NutritionalInfo = ({ flavor }) => {
  return (
    <section className='NutritionalInfo' id="NutritionalInfo">
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

      <h2>Información nutrimental</h2>

      <p className='NutritionalInfo__size'>
        {flavor.sizeInfo.map((line, index) =>
          <span key={`$NutritionalInfo__size-line-${index}`}>{line}<br /></span>
        )}
      </p>

      <p className='NutritionalInfo__ingredients'>
        <span className='NutritionalInfo__ingredients--title'>Ingredientes:</span><br />
        {flavor.ingredientsDescription}
      </p>

      <div className='NutritionalInfo__table'>
        {flavor.nutritionalValues.flat().map((element, index) => {
          const isTitle = index % 2 === 0
          return(
            <h4 
              key={`NutritionalInfo__table-${index}`}
              className={isTitle ? "table-title" : "table-value"}>
            {element}
            </h4>
          )
        })}
      </div>
    </section>
  );
}
 
export default NutritionalInfo;