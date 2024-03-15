import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


export default function PopularMovies() {
    const [popularList, setPopularList] = useState([])

    const getPopular = () => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(json => setPopularList(json.results))
      }
      useEffect(() =>{
        getPopular()
    },[])

    const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4, // Adjust as needed
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };
  
    console.log(popularList)

    return (
      <div className="bg-black bg-opacity-90 p-8 py-8">
        
        <h2 class="text-white font-bold text-3xl">Popular Movies</h2>
        <Slider {...sliderSettings} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5 my-8">
          {popularList.map((series) => (
            <div
              key={series.id}
              className="border p-4 rounded-lg border border-orange-200 rounded-lg shadow-sm dark:bg-gray-900 dark:border-gray-700 hover:shadow-lg"
            >
              <a
              href={"/movieDetails?" + series.id}
                target="/movie"
                rel="noopener noreferrer"
                className="block relative group"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500/${series.poster_path}`}
                  alt={series.name}
                  className="hover:opacity-75 transition duration-300 ease-in-out rounded-lg"
                />
               
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                  <div className="bg-gray-900 bg-opacity-75 rounded-lg p-4 text-white">
                    <p>{series.overview}</p>
                    <div className="flex items-center mt-2">
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
                      <p className="text-yellow-200">{series.vote_average}</p>
                    </div>
                    <p className="text-gray-300 font-semibold mt-2">
                      Release Date: {series.release_date}
                    </p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </Slider>
        
      </div>
    );
}