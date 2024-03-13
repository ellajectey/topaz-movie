import React, {useState, useEffect} from "react";
import NavBar from "../components/navBar";
import Footer from "../components/footer";
import MovieDetails from "../components/movieDetails";
import UserRatings from "../components/userRatings";
import axios from 'axios'; 
import { useLocation } from 'react-router-dom';

function MovieDetailspage() {

    const [movieId, setMovieId] = useState(null);
    const [movie, setMovie] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const fetchMovie = async () => {
          try {
            let movieid = null;
            console.log('location', location);
            if (location.search) {
                movieid = location.search.substring(1);
                setMovieId(location.search.substring(1));
            }
    
            if (movieid) {
                const apiKey = 'ca3c8ec02c3168db9a39ea17a1dcf0a9'; 
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieid}?api_key=${apiKey}`);
                setMovie(response.data);
                // setLoading(false);                
            }
    
          } catch (error) {
            console.error('Error fetching movie:', error);
            // setLoading(false);
          }
        };
    
        fetchMovie();
      }, [movieId]);
    

    return (
        <>
            <NavBar />
            {/* show movie poster */}

            {/* // show movie detail i.e the title and a short overview */}
            {movie && <MovieDetails movie={movie}/> }
            
            {/* // show movie ratings and user reviews */}
            {movieId && <UserRatings movieId={movieId}/> }
            
            <Footer />
        </>
    );
}

export default MovieDetailspage;