import React from 'react';
import Footer from '../components/footer';
import NavBar from '../components/navBar';
import Banner from '../components/banner';

function Homepage(props) {
    return (
        <>
        
            <NavBar/>
            <Banner/>
            <div>
      <h2>Featured Movies</h2>
      {/* Display featured movies */}
      <h2>Trending Series</h2>
      {/* Display trending series */}
    </div>
            <Footer/>
        
        </>
        
    );
}

export default Homepage;