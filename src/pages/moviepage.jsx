import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import NavBar from "../components/navBar";
import Footer from "../components/footer";


function MoviePage() {
    const [movies, setMovies] = useState([]);
    const [bookmarks, setBookmarks] = useState([]);

    useEffect(() => {
        // Fetch movies
        fetchMovies();
        // Retrieve bookmarks from local storage
        const storedBookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        if (storedBookmarks) {
            setBookmarks(storedBookmarks);
        }
    }, []);

    useEffect(() => {
        // Update local storage when bookmarks change
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }, [bookmarks]);


    const fetchMovies = async () => {
        try {
            const response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=8d14bc5cc17bd609435aa33c0221ce8b&language=en');
            const data = await response.json();
            console.log("Movies:", data.results);

            setMovies(data.results);
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    };

    // Function to toggle bookmark status of a movie
    const toggleBookmark = (movieId) => {
        if (bookmarks.includes(movieId)) {
            // Remove from bookmarks
            setBookmarks(bookmarks.filter(id => id !== movieId));
        } else {
            // Add to bookmarks
            setBookmarks([...bookmarks, movieId]);
        }
    };

    return (
        <>
            <NavBar />
            
            <div className="container mx-auto mt-4">
                <h1 className="text-2xl font-bold mb-4">Movies</h1>
                <div className="grid grid-cols-6 gap-4">
                {movies.map(movie => (
                <div key={movie.id} className="border p-4 rounded-lg relative">
                    <div className="relative">
                        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} className="border border-black p-4 rounded-lg w-full h-auto rounded-md mb-2" />
                        <div className="absolute top-0 left-0 right-0 bottom-0 bg-transparent hover:bg-black hover:bg-opacity-50 text-white p-4 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 overflow-auto">
                            <p className="font-semibold mb-2">Overview:</p>
                            <p>{movie.overview}</p>
                        </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{movie.title}</h3>
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-orange-800 mr-1">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" fill="orange" />
                        </svg>
                        <p className="text-black">{movie.vote_average}</p>
                    </div>
                    <p className="text-black">Released: {movie.release_date}</p>
                    <div className="flex items-center mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-6 h-6 text-yellow-500 mr-1 ${bookmarks.includes(movie.id) ? 'opacity-100' : 'opacity-0'}`}>
                            <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z" clipRule="evenodd" />
                        </svg>
                        <button onClick={() => toggleBookmark(movie.id)} className="text-bold text-orange-500 hover:text-yellow-500">
                            {bookmarks.includes(movie.id) ? 'Remove Bookmark' : 'Bookmark'}
                        </button>
                    </div>
                </div>
            ))}
        </div>
        </div>
        
            <Footer />
        </>
    );
}

export default MoviePage;