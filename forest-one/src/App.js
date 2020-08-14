import React from 'react';
import './App.css';
import LandingPage from './pages/LandingPage';
import Header from './components/Header';
import landing from './img/landing.png';
import Footer from './components/Footer';
import Slideshow from './components/Carousel';
import InfoCard from "./components/InfoCard";

function App() {
    return (<div className="App" >
        <Header />
        <Slideshow />
        <InfoCard />
        </div>
    );
}

export default App;