import React from 'react';
import NavbarBefore from './Navbar';
import Landing from './Landing';
import Features from './Features.Jsx';
import Grids from './Grids'
import Reviews from './Reviews';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div>
      <NavbarBefore />
      <Landing/>
      <Features/>
     <Grids/>
      <Reviews/>
      <Footer/>
    </div>
  );
};

export default LandingPage;
