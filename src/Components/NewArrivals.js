import React, { useState } from 'react';
import './NewArrivals.css'


const newProducts = [
  {
    name: 'Yamba Surfboard',
    imageSrc: "https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F72104_000_001.png",
    price: '$850.00',
    rating: '★★★★☆(6)',
  },
  {
    name: 'Lentu Sandals',
    
    imageSrc: "https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F73201_000_001.png",
    price: '$55.00',
    rating: '★★★★★(11)',
  },
  {
    name: 'Tropez Print Swimsuit',
    imageSrc: "https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F73512_000_001.png",
    price: '$50.00',
    rating: '★★★★★(2)',
  },
  {
    name: 'Ignis Cooking System',
    imageSrc: "https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F65100_000_001.png",
    price: '$150.00',
    rating: '★★★★★(1)',
  },
  {
    name: 'Neptos Backpack',
    imageSrc: "https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F69103_000_001.png",
    price: '$320.00',
    rating: '★★★★☆(2)',
  },
  {
    name: 'Bacalen Sleeping Bag',
    imageSrc: "https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F65502_000_001.png",
    price: '$90.00',
    rating: '★★★★☆(2)',
  },
  {
    name: 'Nimbolo Tent',
    imageSrc: "https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F65607_000_001.png",
    price: '$231.00',
    rating: '★★★★★(2)',
  },
];
const NewArrivals = () => {
  const newProductsPerPage = 4; 
  const [startIndex, setStartIndex] = useState(0);

  const prevButtons = () => {
    const newStartIndex = Math.max(startIndex - newProductsPerPage, 0);
    setStartIndex(newStartIndex);
  };

  const nextButtons = () => {
    const newStartIndex = Math.min(startIndex + newProductsPerPage, newProducts.length - newProductsPerPage);
    setStartIndex(newStartIndex);
  };

  return (
    <div className='scrolls'>
      <h2>New Arrivals</h2>
      <div className='aligns'>
        {newProducts.slice(startIndex, startIndex + newProductsPerPage).map((product, index) => (
          <div key={index} className={`product${index + 1}`}>
            <img
              src={product.imageSrc}
              alt={product.name}
              className="msc-main_image msc_images"
              loadfailurebehavior="empty"
            />
            <div className="product-detail">
              <h3>{product.name}</h3>
              <button className='btn1'></button>
              <button className='btn2'></button>
              <button className='btn3'></button>
              <p>{product.price}</p>
              <p>{product.rating}</p>
            </div>
          </div>
        ))}
      </div>
      <button className='buttons-left' onClick={prevButtons}>
        <i className="fa-sharp fa-solid fa-angle-left"></i>
      </button>
      <button className='buttons-right' onClick={nextButtons}>
        <i className="fa-sharp fa-solid fa-angle-right"></i>
      </button>
      <div disabled contentEditable='false'>
        
      </div>
    </div>
  );
};

export default NewArrivals;