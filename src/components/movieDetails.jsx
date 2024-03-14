import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function MovieDetails({ movie }) {
  if (!movie) {
    return <div>Movie not found!</div>;
  }

  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
        className=" rounded-lgw-full h-auto rounded-md mb-2 flex items-center mx-auto "
      />
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <p>Release Date: {movie.release_date}</p>
      <p>
        {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`w-6 h-6 text-yellow-500 mr-1} ${
                    bookmarks.includes(movie.id) ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <path
                    fillRule="evenodd"
                    d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z"
                    clipRule="evenodd"
                  />
                </svg>  */}
        {movie.vote_average}
      </p>
      <Link
        to={`/movie/${movie.id}`}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Watch Trailer
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
          />
        </svg>
      </Link>
    </div>
  );
}

export default MovieDetails;
