import Navbar from "../components/Navbar.jsx";
import React from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return  <>
            <Navbar/>
            <Component {...pageProps} />;
          </> 
}

export default MyApp;
