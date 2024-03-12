import React from 'react';
import Footer from '../components/footer';
import NavBar from '../components/navBar';
import Banner from '../components/banner';

function Homepage(props) {
    return (
        <>
        
            <NavBar/>
            <Banner/>
            <h1>Welcome to My Movie Website</h1>
            <Footer/>
        
        </>
        
    );
}

export default Homepage;