import NavBar from "../components/navBar";
import Footer from "../components/footer";
import SearchBar from "../components/searchBar";
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Moviecard from "../components/movieCard";


export default function Searchpage() {
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('query');

    // Fetch search results based on the query
    fetchSearchResults(query);
  }, [location.search]);

  const fetchSearchResults = async (query) => {
    try {
      // Fetch search results based on the query
      // Replace the URL with the appropriate endpoint for fetching search results
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=8d14bc5cc17bd609435aa33c0221ce8b&query`);
      // const response = await fetch(`https://api.example.com/search?q=${query}`);
      const data = await response.json();
      setSearchResults(data.results);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <div>
      <NavBar />
       <p>search page</p>
     <div className="text-white h-[90vh] flex justify-center items-center content-center mx-20 w-70 h-20 bg-contain shadow-lg shadow-indigo-500/40 rounded-md bg-center bg-cover bg-no-repeat bg-[url('./assets/images/searchpage-header.png')]">
    <SearchBar/>
 </div>
     
      <h2>Search Results</h2>
      {searchResults.length > 0 ? (
        <ul>
          {searchResults.map((result) => (
            <li key={result.id}>{result.title}</li>
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )}
      <Moviecard/>
      <Footer />
    </div>
  );
}

// function Searchpage(props) {
//   const url = "https://api.themoviedb.org/3/search/movie?api_key=8d14bc5cc17bd609435aa33c0221ce8b&query";
//   console.log(url);


//   return (
//     <>
//       <NavBar />
//       <p>search page</p>
//       <div className="text-white h-[90vh] flex justify-center items-center content-center mx-20 bg-contain shadow-lg shadow-indigo-500/40 rounded-md bg-center bg-no-repeat bg-[url('./assets/images/searchpage-header.png')]">
//       <SearchBar/>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default Searchpage;
