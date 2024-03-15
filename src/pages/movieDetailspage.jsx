import React, { useState, useEffect } from "react";
import NavBar from "../components/navBar";
import Footer from "../components/footer";
import MovieDetails from "../components/movieDetails";
import UserRatings from "../components/userRatings";
import axios from "axios";
import { useLocation } from "react-router-dom";

function MovieDetailspage() {
  const [loading, setLoading] = useState(false);
  const [movieId, setMovieId] = useState(null);
  const [movie, setMovie] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        let movieid = null;
        if (location.search) {
          movieid = location.search.substring(1);
          setMovieId(location.search.substring(1));
        }

        if (movieid) {
          const apiKey = "ca3c8ec02c3168db9a39ea17a1dcf0a9";
          const response = await axios.get(
            `https://api.themoviedb.org/3/movie/${movieid}?api_key=${apiKey}`
          );
          setMovie(response.data);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching movie:", error);
        setLoading(false);
      }
    };

    fetchMovie();
  }, [movieId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <NavBar />
      <div className="bg-[url('./assets/images/yellow-movie-bg.jpg')] px-8">
        {/* show movie poster */}
        <br />
        <br />
        <br />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-2 gap-5 p-4">
          {/* // show movie detail i.e the title and a short overview */}
          {movie && <MovieDetails movie={movie} />}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 xl:grid-row-4 gap-5 p-4">
            {/* // show movie ratings and user reviews */}
            {movieId && <UserRatings movieId={movieId} />}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MovieDetailspage;
