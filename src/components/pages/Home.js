import React from 'react';
import AboutUs from '../aboutUs/AboutUs';
import Contact from '../contact/Contact';
import ContactMobile from '../contact/ContactMobile';
import Foundations from '../foundations/Foundations';
import Nav from '../nav/Nav';
import SimpleSteps from '../simpleSteps/SimpleSteps';
import ThreeColumns from '../threeColumns/ThreeColumns';

function Home() {
    return (
        <>
            <Nav />  
            <ThreeColumns />
            <SimpleSteps />
            <AboutUs />
            <Foundations />
            <Contact />
            <ContactMobile />
        </>
    );
}

export default Home;