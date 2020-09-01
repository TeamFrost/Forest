import React from 'react';
import './App.css';
import LandingPage from './pages/LandingPage';
import Header from './components/Header';
import Footer from './components/Footer';
import InfoCard from "./components/InfoCard";
import FirstCarouselApp from "./components/FirstCarousel/FirstCarouselApp";
import Text from "./components/Text";
import ListShop from "./components/List+Shop/ListShop";
import PhotoButtons from "./components/PhotoButtons";
import Menu from "./components/Menu"
import Advantages from "./components/Advantages";
import Houzz from "./components/Houzz";
import AboutUsPage from './pages/AboutUsPage';
import HeaderSecond from "./components/HeaderSecond";

function App() {
    return (
    <div className="App" >
        <div style={{position: 'absolute', top: 70, left: 940}}>
            <Menu />
        </div>
        {/* <HeaderSecond /> */}
        <Header />
        <FirstCarouselApp />
        <InfoCard />
        <PhotoButtons />
        <Text />
        <ListShop />
        <Advantages />
        <Houzz />
        <Footer />
        {/* <AboutUsPage /> */}

        
    </div>
    );
}

export default App;