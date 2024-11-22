import React from 'react';
import Navbar from './landingpage/Navbar';
import Landing from './landingpage/Landing';
import Features from './landingpage/Features';
import Grids from './landingpage/Grids'
import Reviews from './landingpage/Reviews';
import Footer from './landingpage/Footer';

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Landing/>
      <Features/>
     <Grids/>
      <Reviews/>
      <Footer/>
    </div>
  );
};

export default LandingPage;
