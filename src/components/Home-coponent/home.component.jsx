// import React from 'react';
import './home.style.css'
import NavbarComponent from '../navbar-component/navbar.component';
import BackgroundSlider from '../slider-cpmponent/slider.component';

import './home.style.css';
const Home = () => {
  return (
    <div>
        <NavbarComponent/>
        <BackgroundSlider className='background-position'/>
    </div>
  );
};

export default Home;