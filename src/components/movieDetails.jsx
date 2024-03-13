// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom'; 
// // import axios from 'axios'; 

// function MovieDetails({ movieId }) {
//   const [movie, setMovie] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchMovie = async () => {
//       try {
//         const apiKey = 'ca3c8ec02c3168db9a39ea17a1dcf0a9'; 
//         const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`);
//         setMovie(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching movie:', error);
//         setLoading(false);
//       }
//     };

//     fetchMovie();
//   }, [movieId]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!movie) {
//     return <div>Movie not found!</div>;
//   }

//   return (
//     <div>
//         <img
//                 src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
//                 alt={movie.title}
//                 className=" rounded-lgw-full h-auto rounded-md mb-2 flex items-center mx-auto "
//               />
//       <h1>{movie.title}</h1>
//       <p>{movie.overview}</p>
//       <p>Release Date: {movie.release_date}</p>
//       <p>
//       <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   fill="currentColor"
//                   className={`w-6 h-6 text-yellow-500 mr-1} ${
//                     bookmarks.includes(movie.id) ? "opacity-100" : "opacity-0"
//                   }`}
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z"
//                     clipRule="evenodd"
//                   />
//                 </svg> 
//                 {movie.vote_average}</p>
//       <Link to={`/movie/${movie.id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//         View Details
//       </Link>
//     </div>
//   );
// }

// export default MovieDetails;
