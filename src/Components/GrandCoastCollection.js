// GrandCoastCollection.js
import React from 'react';
import './GrandCoastCollection.css';

const GrandCoastCollection = () => {
  return (
    <div className='grand-container'>
      <div className='grand-ele'>
        <img src='https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/MA3jvY?ver=a792&amp;w=0&amp;h=0&amp;q=80&amp;m=6&amp;f=jpg' alt="Grand Coast Collection"></img>
        <div className="grand-overlay">
          <div className="text-container">
            <h1>Grand Coast</h1>
            <span className='col-12'>Collection</span>
            <p>Monica Thompson</p>
            <pre>Pro surfer | Read her story</pre>
          </div>
          <button className='buttonz'>GET THE LOOK</button>
        </div>
      </div>
    </div>
  );
}

export default GrandCoastCollection;
