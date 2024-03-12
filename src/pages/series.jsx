import React from "react";
import NavBar from "../components/navBar";
import Footer from "../components/footer";
import  {useState, useEffect} from 'react'
import { Link } from "react-router-dom";



export default function Series() {
const [seriesList, setSeriesList] = useState([])

  const getSeries = () => {
    fetch('https://api.themoviedb.org/3/trending/tv/day?api_key=ca3c8ec02c3168db9a39ea17a1dcf0a9')
    .then(res => res.json())
    .then(json => setSeriesList(json.results))
  }

  useEffect(() =>{
      getSeries()
  },[])

  console.log(seriesList)
    
  return (
    <>
    <div>
      <NavBar />
      </div >
      {/* {seriesList.map((series) =>(
        <><img src={`https://image.tmdb.org/t/p/w500/${series.poster_path}`} /><div>
          <button><Link>About Series</Link></button>
        </div></>
      ))} */}

<div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  {seriesList.map((series) => (
    <div key={series.id} className="relative">
      <a href={series.videoLink} target="_blank" rel="noopener noreferrer" className="block">
        <img 
          src={`https://image.tmdb.org/t/p/w500/${series.poster_path}`} 
          alt={series.name} 
          className="hover:opacity-75 transition duration-300 ease-in-out"
          // style={{ margin: '0', padding: '0', boxSizing: 'border-box' }}
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
          <button className="bg-yellow-300 py-2 px-4 rounded-lg text-gray-800 font-bold hover:bg-yellow-400">
            Play Video
          </button>
        </div>
      </a>
    </div>
  ))}
</div>

      <div>
      <Footer />
      </div>
    </>
  );
}