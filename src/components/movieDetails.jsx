import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function MovieDetails({ movie }) {
  if (!movie) {
    return <div>Movie not found!</div>;
  }

  return (
    <div className="bg-black bg-opacity-80 p-12 rounded-lg mx-auto">
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
        className=" rounded-lgw-full h-auto rounded-md mb-2 flex items-center mx-auto "
      />
      <h1 className="mx-20 font-bold text-base py-4 text-3xl text-orange-600">{movie.title}</h1>
      <p className="line-clamp-4 mx-20 text-white">{movie.overview}</p>
      <p className="mx-20 py-4 text-yellow-300">Release Date: {movie.release_date}</p>

      <p className="mx-20 py-2">
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
                  {movie.vote_average}
      </p>

      <button className="bg-orange-700 text-white font-bold py-2 px-4 rounded mx-20"
      >
        Watch Trailer
      </button>
    </div>
  );
}

export default MovieDetails;
