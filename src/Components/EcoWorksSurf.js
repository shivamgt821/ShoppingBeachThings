import React, { useState } from 'react';
import './EcoWorksSurf.css';

const products = [
  {
    name: 'Kiama Classic Surfboard',
    imageSrc: 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F72100_000_001.png',
    price: '$790.00',
    rating: '★★★★★(10)',
  },
  {
    name: 'Kalbar Surfboard',
    imageSrc: "https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F72101_000_001.png",
    price: '$850.00',
    rating: '★★★☆☆(2)',
  },
  {
    name: 'Sunnox Surfboard',
    imageSrc: "https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F72103_000_001.png",
    price: '$700.00',
    rating: '★★★★★(7)',
  },
  {
    name: 'Yamba Surfboard',
    imageSrc: "https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F72104_000_001.png",
    price: '$850.00',
    rating: '★★★★☆(6)',
  },
  {
    name: 'Noosa Surfboard',
    imageSrc: "https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F72105_000_001.png",
    price: '$1100.00',
    rating: '★★★★☆(6)',
  },
  {
    name: 'Montau Turtle Surfboard',
    imageSrc: "https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F72106_000_001.png",
    price: '$600.00',
    rating: '★★★★★(1)',
  },
  {
    name: 'Bundor Surfboard',
    imageSrc: "https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F72107_000_001.png",
    price: '$670.00',
    rating: '★★★★★(1)',
  },
  {
    name: 'Bondi Twin Surfboard',
    imageSrc: "https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F72108_000_001.png",
    price: '$580.00',
    rating: '★★★★★(2)',
  },
  {
    name: 'Teapo Rainbow Surfboard',
    imageSrc: "https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F72109_000_001.png",
    price: '$690.00',
    rating: '★★★★★(1)',
  },
];
const EcoWorksSurf = () => {
  const productsPerPage = 2; 
  const [startIndex, setStartIndex] = useState(0);

  const prevButton = () => {
    const newStartIndex = Math.max(startIndex - productsPerPage, 0);
    setStartIndex(newStartIndex);
  };

  const nextButton = () => {
    const newStartIndex = Math.min(startIndex + productsPerPage, products.length - productsPerPage);
    setStartIndex(newStartIndex);
  };

  return (
    <>
    <div className='things'>
      <div className='alignitems'>
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
      <button className='buttonleft' onClick={prevButton}>
        <i className="fa-sharp fa-solid fa-angle-left"></i>
      </button>
      <button className='buttonright' onClick={nextButton}>
        <i className="fa-sharp fa-solid fa-angle-right"></i>
      </button>
      <div disabled contentEditable='false'>
      </div>
    </div>
    <div className='eco-work-container'>
      <div className='ecorworks-content'>
        <h2>EcoWorks Surf</h2>
      <p>
        Our EcoWorks line uses 100% renewable or recycled materials. We want you to feel adventure-ready and confident that your purchase will make a lasting impact.
      </p>
      <button>SHOP ECOWORKS</button>
    </div>

    </div>
    </>
  );
};

export default EcoWorksSurf
