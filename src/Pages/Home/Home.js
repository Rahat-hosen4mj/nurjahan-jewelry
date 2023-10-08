import React from 'react';
import Footer from '../Shared/Footer';
import ContactUs from './ContactUs';
import DealOfDay from './DealOfDay';
import HomeBanner from './HomeBanner';
import AllJewelries from './AllJewelries';



const Home = () => {
    return (
        <div>
            <HomeBanner />
            <AllJewelries />
            <DealOfDay />
           
           
            <ContactUs />
            <Footer />
        </div>
    );
};

export default Home;