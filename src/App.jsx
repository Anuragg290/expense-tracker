import LandingPage from './components/Landingpage'
import Dashboard from './components/Dashboard';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from './components/Signin';

const App = () => {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/Signin" element={<Signin/>}/>
      </Routes>
    </Router>
  );
};

export default App;



