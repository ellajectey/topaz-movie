import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Banner = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=8d14bc5cc17bd609435aa33c0221ce8b&language=en');
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: dots => (
      <div style={{ position: "absolute", bottom: "20px", width: "100%", textAlign: "center" }}>
        <ul style={{ margin: "0" }}> {dots} </ul>
      </div>
    ),
    customPaging: function(i) {
      return <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#fff", margin: "0 3px" }}></div>
    }
  };

  return (
    <div className="h-85 relative ">
      <Slider {...settings}>
        {movies.map(movie => (
          <div key={movie.id} className="h-85 relative">
            <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} className="w-300 h-700 bg-cover" />
            <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-white ">
              <div className='bg-black bg-opacity-70 p-8 rounded-lg text-center'>
              <h1 className="text-4xl text-white text-outline font-bold mb-4 ">{movie.title}</h1>
              <h1 className="text-3xl font-bold tracking-tight text-orange-500 mb-2">
                <span className="text-white shadow-orange">JSE</span> <span className="text-orange-500">Movies</span>.
              </h1>
              <div className="border border-orange-500  px-2 py-4 rounded-lg">
                <p className="text-lg text-white">Explore our vast collection of movies now!</p>
              </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
