import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <>
     
      <div className="container">
    
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                Reviews
              </a>
            </li>
          </ul>
          <p className="text-center text-body-secondary">© 2024 Mern Stack</p>
        </footer>
        
       
      </div>
    </>
  );
};

export default Footer;
