import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
   
export default function SearchBar() {
     
      return (
        <div className="relative flex items-center">
          <form onSubmit={onSubmit}>
            <input
              dir="rtl"
              type="search text"
              id="search"
              placeholder="Search movie"
              className="border border-orange-800 w-90 px-3 py-2 rounded focus:outline-none focus:border-gray-600 text-black"
            />
            <Link to="/search"><button
              dir="rtl"
              className="rounded-s-lg font-semibold bg-orange-500 text-black px-4 py-2"
              type="submit"
            >
              Search
            </button></Link>
          </form>
        </div>
      );
    }