import React from 'react';

const Banner = () => {
  return (
    <div className="flex justify-center items-center h-80 bg-cover bg-center bg-[url('./assets/images/banner.jpg')]">
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center transition-transform duration-500 ease-in-out">
        <h1 className="text-2xl font-bold tracking-tight text-orange-500 transition-opacity duration-500 ease-in-out opacity-0">
          <span className="text-white">JSE</span><span className="text-orange-500 bg-clip-text text-transparent">Movies</span>.
        </h1>
          <p className="text-white text-lg transition-opacity duration-500 ease-in-out opacity-0">Explore our vast collection of movies now!</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
