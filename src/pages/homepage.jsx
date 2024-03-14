import React from 'react';
import Footer from '../components/footer';
import NavBar from '../components/navBar';
import Banner from '../components/banner';
import TopRated from '../components/topRated';
import PopularMovies from '../components/popular';

function Homepage(props) {
    return (
        <>
        
            <NavBar/>
            <Banner/>
            <TopRated/>
            <PopularMovies/>
            <Footer/>
        
        </>
        
    );
}

export default Homepage;