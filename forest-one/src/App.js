import React from 'react';
import './App.css';
import LandingPage from './pages/LandingPage';
import Header from './components/Header';
import landing from './img/landing.png';

function App() {
  return (
    <div className="App" styles={{ backgroundImage: `url(${landing})` }}>
        <Header />
    </div>
  );
}

export default App;
