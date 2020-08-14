import React from 'react';
import './App.css';
import LandingPage from './pages/LandingPage';
import Header from './components/Header';
import landing from './img/landing.png';
import Footer from './components/Footer';
import Slideshow from './components/Carousel';

function App() {
  return (
    <div className="App" styles={{ backgroundImage: `url(${landing})` }}>
        <Header />
        <Slideshow />
        <Footer />
    </div>
  );
}

export default App;
