import React from 'react';
import './App.css';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import FAQ from './pages/FAQ';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import Gdpr from './pages/Gdpr';

function App() {
    return (
        <div className="App" >
            {/* <LandingPage /> */}
            <HomePage />
            {/* <AboutUsPage /> */}
            {/* <FAQ /> */}
            {/* <GalleryPage /> */}
            {/* <ContactPage /> */}
        </div>
    );
}

export default App;