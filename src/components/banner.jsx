import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const apiKey = 'YOUR_TMDB_API_KEY';

export default function Movies() {
    const url = 'https://api.themoviedb.org/3/discover/movie?api_key=8d14bc5cc17bd609435aa33c0221ce8b&language=en'
console.log(url);

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en`
                );
                if (!response.ok) {
                    throw new Error('Failed to fetch movies');
                }
                const data = await response.json();
                console.log('Fetched movies:', data.results);
                setMovies(data.results);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        fetchMovies();
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
    };

    const handleViewDetails = (movieId) => {
        // Implement code to view details for the selected movie
    };

    const handleAddToBookmarks = (movieId) => {
        // Implement code to add the selected movie to bookmarks
    };

    return (
        <div>
            <h2>Featured Movies</h2>
            <Slider {...settings}>
                {movies.map((movie) => (
                    <div key={movie.id}>
                        <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} />
                        <div>
                            <button onClick={() => handleViewDetails(movie.id)}>View Details</button>
                            <button onClick={() => handleAddToBookmarks(movie.id)}>Add to Bookmarks</button>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
