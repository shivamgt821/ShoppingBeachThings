// YourMainComponent.jsx
import React from 'react';
import ZoomedImage from './ZoomedImage';

const images = [
  {
    src: 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/MA139f?ver=90e8&w=650&h=366&m=6',
    title: 'AW Sunglasses',
    description: 'Sun protection to keep your adventures moving! All our sunglasses include scratch-resistant lenses that block 100% of harmful UV rays so you can play all day.',
    buttonLabel: 'Shop Sunglasses',
  },
  {
    src: 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/MA16DB?ver=baec&w=650&h=366&m=6',
    title: 'Backpacks',
    description: 'Field tested and designed with your most extreme adventures in mind. Our line of AW backpacks and daypacks are thoughtfully equipped with easy reach pockets to manage your gear like a pro.',
    buttonLabel: 'Shop Backpacks',
  },
  // Add more images as needed
];

const YourMainComponent = () => {
  return (
    <div className="main-container">
      {images.map((image, index) => (
        <ZoomedImage
          key={index}
          src={image.src}
          title={image.title}
          description={image.description}
          buttonLabel={image.buttonLabel}
        />
      ))}
    </div>
  );
};

export default YourMainComponent;
