import './App.css';
import React, { useState, useEffect } from "react";
import Loader from './components/Loader';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import About from './components/About';
import Desc from './components/Desc';
import PreFooter from './components/PreFooter';
import Footer from './components/Footer';


const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return isLoading ? (
    <Loader isLoading={isLoading} />
  ) : (
    <>
      <Navbar />
      <Home />
      <Gallery />
      <About />
      <Desc />
      <PreFooter />
      <Footer />
    </>
  );
};

export default App;

