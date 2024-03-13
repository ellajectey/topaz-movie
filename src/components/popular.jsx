import  {useState, useEffect} from 'react'


export default function PopularMovies() {
    const [popularList, setPopularList] = useState([])

    const getPopular = () => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=ca3c8ec02c3168db9a39ea17a1dcf0a9')
        .then(res => res.json())
        .then(json => setPopularList(json.results))
      }
      useEffect(() =>{
        getPopular()
    },[])
  
    console.log(popularList)

    return(
    <>
    <p className="text-3xl font-bold underline">Popular movies code goes here</p>

    </>
    )
}