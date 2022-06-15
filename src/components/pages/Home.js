import React from 'react';
import AboutUs from '../aboutUs/AboutUs';
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
        </>
    );
}

export default Home;