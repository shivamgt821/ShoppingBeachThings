import React, { useState } from 'react';
import './Trending.css'

const prod = [
  {
    name: 'Iropa Mountain Bike',
    imageSrc: "https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F67403_000_001.png",
    price: '$899.00',
    rating: '★★★★☆(2)',
  },
  {
    name: 'Kiama Classic Surfboard',
    imageSrc: "https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F72100_000_001.png",
    price: '$790.00',
    rating: '★★★★☆(10)',
  },
  {
    name: 'Static Trunk',
    imageSrc: "https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F73400_000_001.png",
    price: '$60.00',
    rating: '★★★★★(2)',
  },
  {
    name: 'Kavada Pack',
    imageSrc: "https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F69210_000_001.png",
    price: '$170.00',
    rating: '★★★★☆(2)',
  },
  {
    name: 'Pureout sunglasses',
    imageSrc: "https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F64702_000_001.png",
    price: '$29.00',
    rating: '★★★★☆(2)',
  },
  {
    name: 'Cuewer Windsurf',
    imageSrc: "https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F72300_000_001.png",
    price: '$1500.00',
    rating: '★★★★★(2)',
  },
];
const Trending = () => {
  const prodPerPages = 4; 
  const [startIndex, setStartIndex] = useState(0);

  const prevButton = () => {
    // Calculate the new start index for the previous set of prod
    const newStartIndex = Math.max(startIndex - prodPerPages, 0);
    setStartIndex(newStartIndex);
  };

  const nextButton = () => {
    // Calculate the new start index for the next set of prod
    const newStartIndex = Math.min(startIndex + prodPerPages, prod.length - prodPerPages);
    setStartIndex(newStartIndex);
  };

  return (
    <div className='scrol'>
      <h2>Trending</h2>
      <div className='alignes'>
        {prod.slice(startIndex, startIndex + prodPerPages).map((product, index) => (
          <div key={index} className={`product${index + 1}`}>
            <img
              src={product.imageSrc}
              alt={product.name}
              className="msc-main_image msc_imagess"
              loadfailurebehavior="empty"
            />
            <div className="product-dtl">
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
      <button className='btn-left' onClick={prevButton}>
        <i className="fa-sharp fa-solid fa-angle-left"></i>
      </button>
      <button className='btn-right' onClick={nextButton}>
        <i className="fa-sharp fa-solid fa-angle-right"></i>
      </button>
      <div disabled contentEditable='false'>
      </div>
    </div>
  );
};

export default Trending;