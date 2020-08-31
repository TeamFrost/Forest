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

function App() {
    return (<div className="App" >
        <Menu/>
        <Header />
        <FirstCarouselApp />
        <InfoCard />
        <PhotoButtons />
        <Text />
        <ListShop />
        <Advantages />    
        <Footer />
        
    </div>
    );
}

export default App;