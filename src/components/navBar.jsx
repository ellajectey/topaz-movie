import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
  const [searchVisible, setSearchVisible] = useState(false);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
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
    <header className="header bg-black text-white py-4">
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold tracking-tight text-orange-500 mr-4">
            <span className="text-white">JSE</span> 
            <span className="text-gradient-to-r from-amber-500 to-orange-600">Movies</span> 
          </h1>
          <nav className="hidden sm:block text-xl px-16 text-center">
            <ul className="flex space-x-10">
              <li><Link to="/" className="hover:text-orange-500">Home</Link></li>
              <li><Link to="/movie" className="hover:text-orange-500">Movies</Link></li>
              <li><Link to="/series" className="hover:text-orange-500">Series</Link></li>
              <li><Link to="/bookmarks" className="hover:text-orange-500">Bookmarks</Link></li>
            </ul>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={toggleMobileMenu}
            className="sm:hidden bg-transparent border-none outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-orange-500 cursor-pointer">
              <path fillRule="evenodd" d="M4 6h16v1H4zm0 5h16v1H4zm0 5h16v1H4z" clipRule="evenodd"/>
            </svg>
          </button>
          {mobileMenuVisible && (
            <nav className="sm:hidden">
              <ul className="flex flex-col space-y-4">
                <li><Link to="/" className="hover:text-orange-500">Home</Link></li>
                <li><Link to="/movie" className="hover:text-orange-500">Movies</Link></li>
                <li><Link to="/series" className="hover:text-orange-500">Series</Link></li>
                <li><Link to="/bookmarks" className="hover:text-orange-500">Bookmarks</Link></li>
              </ul>
            </nav>
          )}

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleSearch}
              className="bg-transparent border-none outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-orange-500 cursor-pointer">
                <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd"/>
              </svg>
            </button>
            {searchVisible && (
              <form onSubmit={handleSubmit}>
                <input
                  type="search"
                  id="search"
                  placeholder="Search movie"
                  className="border border-orange-800 w-40 px-3 py-2 rounded focus:outline-none focus:border-gray-600 text-black"
                  value={searchTerm}
                  onChange={handleChange}
                />
                <button
                  className="font-semibold bg-orange-500 text-black px-4 py-2"
                  type="submit"
                >
                  Search 
                </button>
              </form>
            )}

            <div className="hidden sm:flex space-x-4">
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
        </div>
      </div>
    </header>
  );
}
