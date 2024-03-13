import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

export default function Moviecard({genre, groupedMovies, movies, bookmarks,toggleBookmark}) {
 

  
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">{genre.name}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5 my-4">
        {groupedMovies[genre.id] &&
          groupedMovies[genre.id].map((movie) => (

            <div key={movie.id} className="border p-4 rounded-lg  bg-black border border-orange-200 rounded-lg shadow sm:p-8 dark:bg-gray-900 dark:border-gray-700 shadow-[rgb(255,165,0)_0px_3px_8px]">

              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                className=" rounded-lgw-full h-auto rounded-md mb-2 flex items-center mx-auto "
              />
              <h3 className="text-lg text-white font-semibold mb-2 mx-auto">{movie.title}</h3>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-orange-800 mr-1"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clipRule="evenodd"
                    fill="orange"
                  />
                </svg>

                <p className="text-yellow-200">{movie.vote_average}</p>
              </div>
              <p className="text-gray-300 font-semi-bold">Release Date: {movie.release_date}</p>
              <div className=" item-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`w-6 h-6 text-yellow-500 mr-1 ${
                    bookmarks.includes(movie.id) ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <path
                    fillRule="evenodd"
                    d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z"
                    clipRule="evenodd"
                  />
                </svg>
                <button
                  onClick={() => toggleBookmark(movie.id)}
                  className="text-bold text-orange-500 hover:text-yellow-500 text-left "
                >
                  {bookmarks.includes(movie.id)
                    ? "Remove Bookmark"
                    : "Bookmark"}
                </button>
                
                <Link
                  to="/bookmarks"
                  className="ml-2 text-sm text-white hover:underline text-left p-4"
                >
                  View Bookmarks
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
