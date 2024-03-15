import React, { useState, useEffect, } from 'react';
import NavBar from '../components/navBar';
import Footer from '../components/footer';
import { Link } from 'react-router-dom';
import Moviedetails from '../components/movieDetails';


function Bookmarks() {
    const [bookmarkedMovies, setBookmarkedMovies] = useState([]);
    // const [genresShared, setGenresShared] = useContext(AppContext);

    useEffect(() => {
        // Retrieve bookmarked movie IDs from local storage
        const storedBookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        if (storedBookmarks) {
            // Fetch details of bookmarked movies using the IDs
            fetchBookmarkedMovies(storedBookmarks);
            // console.log('incoming genres', genresShared);
        }
    }, []);

    const fetchBookmarkedMovies = async (movieIds) => {
        try {
            const promises = movieIds.map(async (movieId) => {
                const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=8d14bc5cc17bd609435aa33c0221ce8b&language=en`);
                const data = await response.json();
                return data;
            });
            const movies = await Promise.all(promises);
            setBookmarkedMovies(movies);
        } catch (error) {
            console.error('Error fetching bookmarked movies:', error);
        }
    };

    return (
        <>
            <NavBar />
            <div className=" bg-cover bg-[url('./assets/images/yellow-movie-bg.jpg')] py-8 ">
                <h1 className="text-4xl text-center text-white font-bold mb-4 p-4">Bookmarked Movies</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 ">
                    {bookmarkedMovies.map((movie) => (
                        <div key={movie.id} className=" p-4 rounded-lg  bg-gray-900 border border-orange-200 rounded-lg shadow sm:p-8 dark:bg-gray-900 dark:border-gray-700 shadow-[rgb(255,165,0)_0px_3px_8px]">
                            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} className=" p-4 rounded-lg w-full h-auto rounded-md mb-2" />
                            <h3 className="text-lg text-white font-semibold mb-2">{movie.title}</h3>
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-orange-800 mr-1">
                                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" fill="orange" />
                                </svg>
                                <p className="text-yellow-200">{movie.vote_average}</p>
                            </div>
                            <p className="text-gray-300 font-semi-bold">Release Date: {movie.release_date}</p>
                           
                        </div>
                    ))}
                </div>
            </div>
            {/* <Moviecard genre={genre} movies={movies} groupedMovies={groupedMovies} bookmarks={bookmarks} toggleBookmark={toggleBookmark}/> */}

            <Footer />
        </>
    );
}


export default Bookmarks;