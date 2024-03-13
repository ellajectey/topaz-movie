import React from 'react';
import Footer from '../components/footer';
import NavBar from '../components/navBar';
import Banner from '../components/banner';
import TopRated from '../components/topRated';

function Homepage(props) {
    return (
        <>
        
            <NavBar/>
            <Banner/>
            <h1>Welcome to My Movie Website</h1>
            <TopRated/>
            <Footer/>
        
        </>
        
    );
}

export default Homepage;