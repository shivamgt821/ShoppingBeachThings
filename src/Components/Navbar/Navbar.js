import React from 'react';
import './Navbar.css';
import adventure from '../Assests/Adventure_Works_Title.png'


const Navbar = () => {
    return (
      <div className='headers'>
          <p><span>Buy 2 or more surf products and get 25% off!   </span>
          <a className="ms-promo-banner__link"  title="Shop now" href="/adventure-works/gear/%D8%B1%D9%83%D9%88%D8%A8-%D8%A7%D9%84%D8%A3%D9%85%D9%88%D8%A7%D8%AC/68719481800.c" aria-label="Shop now" data-exp-event-id="Homepage.Promo banner.Shop now.click">Shop now</a>
          </p>
      
          <div className="navbar">
            <div className="menu-icons"><i class="fa-solid fa-bars"></i>
            </div>
            
            <div className="logo">
                <img src={adventure} alt="adventure_works" />
            </div>

            <div class="search-container">
                <input type="text" class="search-bar" placeholder="Search Adventure Works" />
                <i class="fas fa-search search-icon"></i>
            </div>

            <div className="store-locator">
                <span><i class="fa-solid fa-location-dot"></i>Store Locator</span>
            </div>

            <div className="sign-in">
                <span><i class="fa-regular fa-circle-user"></i>Sign In</span>
            </div>

            <div class="shopping-bag">
                <i class="fas fa-shopping-bag"></i>
            </div>

            <div className="site-picker">
                <span>Site<i class="fa-solid fa-chevron-down"></i></span>
            </div>
        </div>
        </div>
    );
};

export default Navbar;