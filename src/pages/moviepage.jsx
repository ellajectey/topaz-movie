import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import NavBar from "../components/navBar";
import Footer from "../components/footer";
import Moviecard from "../components/movieCard";


function MoviePage() {
    const [genres, setGenres] = useState([]);
    const [movies, setMovies] = useState([]);
    const [bookmarks, setBookmarks] = useState([]);

    useEffect(() => {
        // Fetch genres
        fetchGenres();
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

    const fetchGenres = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`);
            const data = await response.json();
            setGenres(data.genres);
        } catch (error) {
            console.error('Error fetching genres:', error);
        }
    };

    const fetchMovies = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}`);
            const data = await response.json();
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

    // Group movies by genre
    const groupedMovies = {};
    movies.forEach(movie => {
        movie.genre_ids.forEach(genreId => {
            if (!groupedMovies[genreId]) {
                groupedMovies[genreId] = [];
            }
            groupedMovies[genreId].push(movie);
        });
    });

    // Render movies by genre
    return (
        <>
            <NavBar />
            <div className="mx-auto bg-[url('./assets/images/yellow-movie-bg.jpg')]">
                <h1 className="text-4xl font-bold mb-4 p-8 text-center text-white">Movies by Genre</h1>
                {genres.map((genre, key) => (
                    <Moviecard key={key} genre={genre} movies={movies} groupedMovies={groupedMovies} bookmarks={bookmarks} toggleBookmark={toggleBookmark}/>
                ))}
                {/* <Link to="/bookmarks" className="ml-2 text-sm text-white hover:underline">View Bookmarks</Link> */}
            </div>
           
            <Footer />
        </>
    );
}

export default MoviePage;