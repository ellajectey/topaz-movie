import React from 'react';
import Footer from '../components/footer';
import NavBar from '../components/navBar';
import Banner from '../components/banner';

function Homepage(props) {
    return (
        <>
        
            <NavBar/>
            <Banner/>
            <p>Homepage page</p>
            <Footer/>
        
        </>
        
    );
}

export default Homepage;