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
      console.log("Query:", query);
      fetchSearchResults(query);
    }
  }, [location.search]);

  const fetchSearchResults = async (query) => {
    try {
      // You can make an API request here to fetch search results based on the query
      console.log("Fetching search results for query:", query);
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}`);
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
      <div className=" bg-[url('./assets/images/yellow-movie-bg.jpg')] ">
        <h1 className="text-2xl font-bold mb-4 text-white text-center p-4">Search Results</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-8">
          {searchResults.length === 0 ? (
            <p>No search results found.</p>
          ) : (
            searchResults.map((movie, index) => (
              <div key={index} className="border p-4 rounded-lg  bg-black border border-orange-200 rounded-lg shadow sm:p-8 dark:bg-gray-900 dark:border-gray-700 shadow-[rgb(255,165,0)_0px_3px_8px]">

                  <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} className="w-full h-auto rounded-md mb-2" />
                <h2 className="text-xl font-bold text-orange-400">{movie.title}</h2>
                <p className="text-white line-clamp-6">{movie.overview}</p>
                <p className="text-yellow-300">Release Date: {movie.release_date}</p>
                
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-orange-500 mr-1"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clipRule="evenodd"
                    fill=""
                  />
                </svg>
                <p className="text-orange-400">{movie.vote_average}</p>

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

