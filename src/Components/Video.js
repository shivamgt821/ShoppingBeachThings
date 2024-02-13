import React from 'react';
import './Video.css';

const Video = () => {
  return (
    <div className='videos-container'>
      <div className='videos-ele'>
        {/* Add text on the left side of the video */}
        <div className="text-overlay">
          <h1>Sunrise Sessions</h1>
          <p className='para'>Kiana anderson</p>
          <pre>Pro surfer | Read her story</pre>
          <button className='buttonk'>SHOP SURFBOARDS</button>
          
        </div>

        {/* The video element */}
        <video
          className="msc-videoplayer__video"
          preload="auto"
          autoPlay
          muted
          loop
          src="//streaming-us-prod.cms.commerce.dynamics.com/f47f3a9c-fb34-4be0-8bd8-d18449ead1d9/92457605-1604-4f86-842a-2f56e469_650.mp4"
          poster="//images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/MA13ab?ver=a951"
          playsInline
          aria-hidden="true"
        ></video>
      </div>
    </div>
  );
};

export default Video;
