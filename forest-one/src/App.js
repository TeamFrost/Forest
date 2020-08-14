import React from 'react';
import './App.css';
import LandingPage from './pages/LandingPage';
import Header from './components/Header';
import landing from './img/landing.png';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App" styles={{ backgroundImage: `url(${landing})` }}>
        <Header />
        {/* <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> */}
        <Footer />
    </div>
  );
}

export default App;
