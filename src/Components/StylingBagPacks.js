import React, { useState } from 'react';
import './GetTheGear.css';

const products = [
  {
    name: 'Kiama Classic Surfboard',
    imageSrc: "https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F72100_000_001.png",
    price: '$790.00',
    rating: '★★★★☆(10)',
  },
  
];
const GetTheGear = () => {
  const productsPerPage = 3; // Number of products to show per page
  const [startIndex, setStartIndex] = useState(0);

  const prevButton = () => {
    // Calculate the new start index for the previous set of products
    const newStartIndex = Math.max(startIndex - productsPerPage, 0);
    setStartIndex(newStartIndex);
  };

  const nextButton = () => {
    // Calculate the new start index for the next set of products
    const newStartIndex = Math.min(startIndex + productsPerPage, products.length - productsPerPage);
    setStartIndex(newStartIndex);
  };

  return (
    <div className='scroll'>
      <h2>Get the gear</h2>
      <div className='align'>
      {products.slice(startIndex, startIndex + productsPerPage).map((product, index) => (
          <div key={index} className={`product${index + 1}`}>
            <img
              src={product.imageSrc}
              alt={product.name}
              className="image"
              loadfailurebehavior="empty"
            />
            <div className="productdetails">
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
      <button className='button-left' onClick={prevButton}>
        <i className="fa-sharp fa-solid fa-angle-left"></i>
      </button>
      <button className='button-right' onClick={nextButton}>
        <i className="fa-sharp fa-solid fa-angle-right"></i>
      </button>
      <div disabled contentEditable='false'>
      </div>
    </div>
  );
};

export default GetTheGear;
