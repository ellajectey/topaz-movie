import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import NavBar from "../components/navBar"; 
import Footer from "../components/footer"; 

function SearchPage() {
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();
  
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('query');
    if (query) {
      fetchSearchResults(query);
    }
  }, [location.search]);

  const fetchSearchResults = async (query) => {
    try {
      // You can make an API request here to fetch search results based on the query
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=8d14bc5cc17bd609435aa33c0221ce8b&query=${query}`);
      const data = await response.json();
      setSearchResults(data.results); // Assuming data.results contains the search results
    } catch (error) {
      console.error('Error fetching search results:', error);
    }  
  };


  // Display search results
  return (
    <>
      <NavBar />
      <div className="container mx-auto mt-4">
        <h1 className="text-2xl font-bold mb-4">Search Results</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {searchResults.length === 0 ? (
            <p>No search results found.</p>
          ) : (
            searchResults.map((movie, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-lg">
                  <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} className="w-full h-auto rounded-md mb-2" />
                <h2 className="text-xl font-bold">{movie.title}</h2>
                <p className="text-gray-700">{movie.overview}</p>
                <p className="text-gray-600">Release Date: {movie.release_date}</p>
              </div>
            ))
          )}
        </div>
      </div>
      <Footer />

    </>
  );
}
export default SearchPage;

