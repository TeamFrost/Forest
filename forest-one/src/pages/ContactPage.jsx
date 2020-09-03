import React from "react";
import HeaderSecond from "../components/HeaderSecond";
import Footer from '../components/Footer';
import ContactCards from "../components/ContactCards";
import Map from "../helpers/Map";
import StreetView from "../components/StreetView";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    text: {
        position: 'absolute',
        left: 1640,
        top: 2290,
        fontStyle: 'italic',
        color: 'white',
        fontSize: 20,
    },
});

function ContactPage() {

    const classes = useStyles();

    return (
        <div>
            <HeaderSecond />
            <ContactCards />
            <StreetView />
            <Map />
            <Typography className={classes.text}>
                #lemnieftin
            </Typography>
            <Footer />
        </div>
    );
}

export default ContactPage;