import React from 'react';
import Services from '../Services/Services';
import Banner from './Banner/Banner';
import Contrace from './Contract/Contrace';
import Feature from './Features/Feature';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Feature></Feature>
            <Contrace></Contrace>
        </div>
    );
};

export default Home;