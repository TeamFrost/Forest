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
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    text: {
        position: 'absolute',
        left: 1640,
        top: 5925,
        fontStyle: 'italic',
        color: 'white',
        fontSize: 20,
    },
});

function HomePage() {
    const classes = useStyles();

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
            <Typography className={classes.text}>
                #cherestea
            </Typography>
            <Footer />

        </div>
    );
}

export default HomePage;