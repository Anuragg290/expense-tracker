import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './images/logo-black.png'
const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault(); // Prevent form submission

    // Validation check
    if (!email.trim() || !password.trim()) {
      alert('Please fill in both email and password.');
      return;
    }

    // Set login state and redirect if validation passes
    localStorage.setItem('isLoggedIn', 'true');
    navigate('/dashboard');
  };

  return (
    <main  style={{
      backgroundColor: '#8d99ae',
      backgroundSize: "cover", // Ensures the image covers the entire container
      // Prevents the image from repeating
      height: "100vh", // Sets the height of the container (adjust as needed)
      width: "100%",
      alignItems: "center", // Vertically centers the content
        justifyContent: "center", // Makes the container take the full width
    }}
  >
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
       
       <div style={{
      
        width: "500px",
        padding: "30px",
        alignItems: "center",
        marginLeft: "30%",
        borderRadius: "20px", // Smooth rounded corners
        backgroundColor: "rgba(255, 255, 255, 0.6)", // Semi-transparent white background
        backdropFilter: "blur(10px)", // Blur effect for the glass effect
        WebkitBackdropFilter: "blur(10px)", // Safari compatibility
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)", // Add some shadow for depth
      }}>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src={logo}
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  required
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  required
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-800 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
        </div>
        </div>
  
      </main>
  );
};

export default Signin;
