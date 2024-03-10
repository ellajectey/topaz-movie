import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';


export default function NavBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to the search results page with the search term as a query parameter
    navigate(`/search?query=${searchTerm}`);
  };

  return (
    <header className="header bg-black text-white py-4 justify-center">
      <div className="icon mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight text-orange-500">
          <span className="text-white">JSE</span> <span className="text-orange-800">Movies</span>
        </h1>

        <nav className="navbar flex ml-20">
          <ul className="flex space-x-10 ml-20">
            <li><Link to="/" className="hover:text-orange-500">Home</Link></li>
            <li><Link to="/movie" className="hover:text-orange-500">Movies</Link></li>
            <li><Link to="/series" className="hover:text-orange-500">Series</Link></li>
            <li><Link to="/bookmarks" className="hover:text-orange-500">Bookmarks</Link></li>
          </ul>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="relative flex items-center">
            <form onSubmit={handleSubmit}>
              <input
                dir="rtl"
                type="search text"
                id="search"
                placeholder="Search movie"
                className="border border-orange-800 w-90 px-3 py-2 rounded focus:outline-none focus:border-gray-600 text-black"
                value={searchTerm}
                onChange={handleChange}
              />
              <button
                dir="rtl"
                className="rounded-s-lg font-semibold bg-orange-500 text-black px-4 py-2"
                type="submit" // Change 'onClick' to 'type="submit"'
              >
                Search
              </button>
            </form>
          </div>

          <div className="flex space-x-4">
            <Link
              to="/register"
              className="bg-white text-black py-2 px-4 rounded hover:bg-orange-500 hover:text-white font-bold"
            >
              Register
            </Link>
          </div>
          <div>
            <Link
              to="/login"
              className="bg-white text-black py-2 px-4 rounded hover:bg-orange-500 hover:text-white font-bold"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
