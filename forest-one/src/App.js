import React from 'react';
import './App.css';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import FAQ from './pages/FAQ';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import Gdpr from './pages/Gdpr';
import TestCards from './components/TestCards';

function App() {
    return (
        <div className="App" >
            {/* <LandingPage /> */}
            {/* <HomePage /> */}
            {/* <AboutUsPage /> */}
            <FAQ />
            {/* <GalleryPage /> */}
            {/* <ContactPage /> */}
            {/* <Gdpr /> */}
            {/* <TestCards /> */}
        </div>
    );
}

export default App;