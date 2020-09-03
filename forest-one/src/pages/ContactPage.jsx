import React from "react";
import HeaderSecond from "../components/HeaderSecond";
import Footer from '../components/Footer';
import ContactCards from "../components/ContactCards";

function ContactPage() {
    return(
        <div>
            <HeaderSecond />
            <ContactCards />
            <Footer />
        </div>
    );
}

export default ContactPage;