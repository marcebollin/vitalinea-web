import React, { useState } from 'react';
import NutritionalInfo from '../components/NutritionalInfo';
import ProductCover from '../components/ProductCover';
import ProductsFamily from '../components/ProductsFamily';
import flavors from '../data/flavors'

const MainLayout = () => {
  const [flavor, setFlavor] = useState(flavors[0]) 

  return (
    <main>
      <ProductCover 
        flavor={flavor} 
        setFlavor={setFlavor} 
        flavors={flavors} />
      <NutritionalInfo flavor={flavor}/>
      <ProductsFamily />
    </main>
  );
}
 
export default MainLayout;