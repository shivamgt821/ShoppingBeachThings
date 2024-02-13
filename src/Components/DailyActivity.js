import React, { useState } from 'react';
import './DailyActivity.css';

const DailyActivity = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const adventure = [
        {
            id: 21,
            image: "https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/MA139J?",
            title: 'Camping',
            logo: "https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/MA137E?",
        },
        {
            id: 22,
            image: "https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/MA1393?",
            title: 'cycling',
            logo: "https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/MA1382?ver=b295&m=6"
        },
        {
            id: 23,
            image: "https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/MA139M?",
            title: 'swimming',
            logo: "https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/MA137K?ver=f891&m=6",
        },
        {
            id: 24,
            image: "https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/MA139o?",
            title: 'climbing',
            logo: "https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/MA137H?",
        },
        {
            id: 25,
            image: "https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/MA1399?",
            title: 'yoga',
            logo: "https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/MA137N?",
        },
        {
            id: 26,
            image: "https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/MA1396?",
            title: 'snowBoarding',
            logo: "https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/MA1382?",
        },
    ];

    const handleNext = () => {
        if (currentIndex < adventure.length - 4) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <>
            <div className="work-container">
                <div disabled contentEditable="false">
                    <p style={{ textAlign: 'center' }}>
                        <span style={{ fontSize: '72px' }}>
                            <strong>what's your next</strong>
                        </span>
                    </p>
                    <p style={{ textAlign: 'center', position: 'relative', left: '65px', bottom: '75px' }}>
                        <em style={{ fontFamily: 'Comic Sans MS, Cursive;', fontSize: '90px', fontWeight: '80rem', fontStyle: 'italic' }}>
                            <span style={{ color: '#0066ff' }}>&nbsp;adventure?</span>
                        </em>
                    </p>
                </div>

                <div className="card-slider">
                    <ul className="card-list" style={{ transform: `translateX(${-currentIndex * 25}%)` }}>
                        {adventure.slice(currentIndex, currentIndex + 4).map((activity) => (
                            <li key={activity.id} className='work-list-items'>
                                <a className='adventure-work-item' href="/">
                                    <div className='card-container'>
                                        <div className='background-image' style={{ backgroundImage: `url(${activity.image})` }}></div>
                                        <div className='logo-container'>
                                            <h1>{activity.title}</h1>
                                            <picture className='bg-image'>
                                                <img src={activity.logo} alt={activity.logo} />
                                            </picture>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="navigation-buttons">
                    <button className='prev-angles' onClick={handlePrev} disabled={currentIndex === 0}>
                        <i className="fa-solid fa-angle-left"></i>
                    </button>
                    <button className='next-angles' onClick={handleNext} disabled={currentIndex >= adventure.length - 4}>
                        <i className="fa-solid fa-angle-right"></i>
                    </button>
                </div>
            </div>
        </>
    )
}

export default DailyActivity;
