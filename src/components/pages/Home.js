import React from 'react';
import Nav from '../nav/Nav';
import SimpleSteps from '../simpleSteps/SimpleSteps';
import ThreeColumns from '../threeColumns/ThreeColumns';

function Home() {
    return (
        <>
            <Nav />  
            <ThreeColumns />
            <SimpleSteps />
        </>
    );
}

export default Home;