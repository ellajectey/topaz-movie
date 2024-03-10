import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function SearchResults() {
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
      const response = await fetch(`https://api.example.com/search?q=${query}`);
      const data = await response.json();
      setSearchResults(data.results);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <div>
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
    </div>
  );
}
