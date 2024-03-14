// NavBar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to the search results page with the search term as a query parameter
    navigate(`/searchresults?query=${searchTerm}`);
  };

  return (
    <header className="  header bg-black text-white py-4 justify-center ">
      <div className="icon mx-20 flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight text-orange-500">

          <span className="text-white">JSE</span> 
          <span className="text-gradient-to-r from-amber-500 to-orange-600">Movies</span> 

        </h1>

        <nav className="navbar flex ml-20 text-2xl">
          <ul className="flex space-x-10 ml-20">
            <li><Link to="/" className="hover:text-orange-500">Home</Link></li>
            <li><Link to="/movie" className="hover:text-orange-500">Movies</Link></li>
            <li><Link to="/series" className="hover:text-orange-500">Series</Link></li>
            <li><Link to="/bookmarks" className="hover:text-orange-500">Bookmarks</Link></li>
          </ul>
        </nav>

        <div className="flex items-center space-x-4 relative">
          <button
            onClick={toggleSearch}
            className="bg-transparent border-none outline-none mr-4" // Adjust margin to shift the icon to the left
          >
            {/* Replace the placeholder icon with your SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-orange-500 cursor-pointer">
              <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
            </svg>
          </button>
          {searchVisible && (
            <form onSubmit={handleSubmit} className="absolute top-0 right-0 mt-10 flex items-center">
              <input
                type="search"
                id="search"
                placeholder="Search movie"
                className="border border-orange-800 w-40 px-3 py-2 rounded focus:outline-none focus:border-gray-600 text-black"
                value={searchTerm}
                onChange={handleChange}
              />
              <button
                className="font-semibold bg-orange-500 text-black px-4 py-2 "
                type="submit"
                style={{ marginLeft: '-2px' }} // Adjust the margin to align the button with the input field
              >
                Search 
              </button >
            </form>
          )}
        </div>

        <div className="flex space-x-4">
          <Link
            to="/register"
            className="bg-white text-black py-2 px-4 rounded hover:bg-orange-500 hover:text-white font-bold"
          >
            Register
          </Link>
          <Link
            to="/login"
            className="bg-white text-black py-2 px-4 rounded hover:bg-orange-500 hover:text-white font-bold"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}
