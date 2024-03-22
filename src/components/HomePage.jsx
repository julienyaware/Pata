import React from 'react';
import AdDisplay from './AdDisplay';
import AboutUs from './AboutUs';
import ConsultUs from './ConsultUs';
import Services from './Services';
import Footer from './Footer';
import NavBar from './NavBar';
import Login from './Login';

function HomePage(props) {
    return (
        <div>
            <NavBar />
            <AdDisplay />
            <AboutUs />
            <ConsultUs />
            <Services />
            <Footer />
            <Login />
        </div>
    );
}

export default HomePage;