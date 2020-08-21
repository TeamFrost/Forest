import React from 'react';
import './App.css';
import LandingPage from './pages/LandingPage';
import Header from './components/Header';
import Footer from './components/Footer';
import InfoCard from "./components/InfoCard";
import FirstCarouselApp from "./components/FirstCarousel/FirstCarouselApp";
import Text from "./components/Text";
import TableList from "./components/TableList";
import ButtonBases from "./components/PhotoButtons";


function App() {
    return (<div className="App" >
        <Header />
        <FirstCarouselApp />
        <InfoCard />
        <ButtonBases />
        <Text />
        <TableList />
        <Footer />
        
        
        

    </div>
    );
}

export default App;