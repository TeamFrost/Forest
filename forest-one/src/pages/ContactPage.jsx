import React from "react";
import HeaderSecond from "../components/HeaderSecond";
import Footer from '../components/Footer';
import ContactCards from "../components/ContactCards";
import Map from "../helpers/Map";
import StreetView from "../components/StreetView";

function ContactPage() {
    return(
        <div>
            <HeaderSecond />
            <ContactCards />
            <StreetView />
            <Map />
            <Footer />
        </div>
    );
}

export default ContactPage;