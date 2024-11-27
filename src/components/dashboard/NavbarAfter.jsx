import React, { useEffect, useState } from 'react';
import logoLight from '../images/logo-black.png'; // Default logo
import logoDark from '../images/logo-white.png'; // Logo for sticky navbar
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const navigate = useNavigate();

  // Handle user login
  const handleLogin = () => {
    localStorage.setItem('isLoggedIn', 'true'); // Set login state
    navigate('/'); // Redirect to the home page
  };



  // Check if the user is logged in
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`containers ${sticky ? 'darknav' : ''}`}>
      {/* Change logo dynamically based on sticky state */}
      <img src={sticky ? logoLight : logoDark} alt="Logo" className="logo" />
      <ul>
        <li>
        <button><Link to="Landing" smooth={true} offset={-300} duration={500}>  Home
        </Link></button>
        </li>
        <li>
        <button><Link to="Grids" smooth={true} offset={-0} duration={30}>  Summary
        </Link></button>
        </li>
        <li>
        <button><Link to="Reviews" smooth={true} offset={-30} duration={50}> Chart
        </Link></button>
        </li>
        <li>
          <button><Link to="Footer" smooth={true} offset={-30} duration={50}>  Contact Us
          </Link></button>
          
        </li>
        <li>
        <button onClick={handleLogin}>Log Out</button>
          
        </li>
      </ul>
    
    </nav>
  );
};

export default Navbar;
