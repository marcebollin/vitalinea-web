import React, { useState } from 'react';
import Button from './Button';
import '../styles/FlavorsList.scss'

const FlavorsList = ({ flavors, setFlavor }) => {
  const [ filledButton, setFilledButton ] = useState(0)

  const handleClick = (ev) => {
    const index = +ev.target.value
    setFilledButton(index)
    setFlavor(flavors[index])
  } 

  return (
    <div className='FlavorsList'>
      <h4>Nuestros Sabores:</h4>
      <ul>
        {flavors.map(({ flavorName }, index) =>
            <li key={`Flavor-${index}`}>
              <Button 
                index={index}
                type={"secondary"}
                filled={index === filledButton}
                handleClick={handleClick}
              >{flavorName}</Button>
            </li>
        )}
      </ul> 
    </div>
  );
}
 
export default FlavorsList;