import React from "react";
import NavBar from "../components/navBar";
import Footer from "../components/footer";
import { useState, useEffect } from "react";


export default function Series() {
  const [seriesList, setSeriesList] = useState([]);

  const getSeries = () => {
    fetch(
      "https://api.themoviedb.org/3/trending/tv/day?api_key=ca3c8ec02c3168db9a39ea17a1dcf0a9"
    )
      .then((res) => res.json())
      .then((json) => setSeriesList(json.results));
  };

  useEffect(() => {
    getSeries();
  }, []);

  console.log(seriesList);

  return (
    <>
      <NavBar />

      <div className=" bg-[url('./assets/images/yellow-movie-bg.jpg')] p-8">
        <h2 className="text-4xl text-center text-white font-bold mb-2 mt-6  p-0 ml-10">Series</h2>
        <div className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5 my-8">
          {seriesList.map((series) => (
            <div
              key={series.id}
              className="border p-4 rounded-lg border border-orange-200 rounded-lg shadow sm:p-8 bg-black bg-opacity-80 dark:bg-gray-900 dark:border-gray-700 shadow-[rgb(255,165,0)_0px_3px_8px]"
            >
              <a
                href={series.overview}
                target="#"
                rel="noopener noreferrer"
                className="block relative"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500/${series.poster_path}`}
                  alt={series.name}
                  className="hover:opacity-75 transition duration-300 ease-in-out"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
                  <div className="bg-gray-900 bg-opacity-75 rounded-lg px-4 py-2 text-white">
                    <p className="line-clamp-5">{series.overview}</p>
                    <div className="flex items-center">
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
                    <p className="text-gray-300 font-semi-bold">
                      Release Date: {series.release_date}
                    </p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
