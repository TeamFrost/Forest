import React from 'react';
import Menu from "../components/Menu"
import Header from '../components/Header';
import FirstCarouselApp from '../components/FirstCarousel/FirstCarouselApp';
import InfoCard from '../components/InfoCard';
import PhotoButtons from '../components/PhotoButtons';
import Text from '../components/Text';
import ListShop from '../components/List+Shop/ListShop';
import Advantages from "../components/Advantages";
import Houzz from '../components/Houzz';
import Footer from '../components/Footer';

function HomePage() {
    return (
        <div>
            <div style={{ position: 'absolute', top: 70, left: 940 }}>
                <Menu />
            </div>

            <Header />
            <FirstCarouselApp />
            <InfoCard />
            <PhotoButtons />
            <Text />
            <ListShop />
            <Advantages />
            <Houzz />
            <Footer />

        </div>
    );
}

export default HomePage;