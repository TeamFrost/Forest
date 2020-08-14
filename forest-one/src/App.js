import React from 'react';
import './App.css';
import LandingPage from './pages/LandingPage';
import Header from './components/Header';
import Slideshow from './components/Carousel';

function App() {
  return (
    <div className="App">
      <Header />
      <Slideshow />
    </div>
  );
}

export default App;
