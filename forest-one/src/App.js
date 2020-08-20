import React from 'react';
import './App.css';
import LandingPage from './pages/LandingPage';
import Header from './components/Header';
import Footer from './components/Footer';
import InfoCard from "./components/InfoCard";
import FirstCarouselApp from "./components/FirstCarousel/FirstCarouselApp";
import SecondCarouselApp from "./components/SecondCarousel/SecondCarouselApp";
import Text from "./components/Text";
import TableList from "./components/TableList";


function App() {
    return (<div className="App" >
        {/* <Header /> */}
        {/* <FirstCarouselApp /> */}
        {/* <InfoCard /> */}
        {/* <Text /> */}
        {/* <SecondCarouselApp /> */}
        {/* <Footer /> */}
        <TableList />
        

    </div>
    );
}

export default App;