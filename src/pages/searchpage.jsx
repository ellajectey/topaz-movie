import React from "react";
import NavBar from "../components/navBar";
import Footer from "../components/footer";
import SearchBar from "../components/searchBar";

function Searchpage(props) {
  const url = "https://api.themoviedb.org/3/search/movie?api_key=8d14bc5cc17bd609435aa33c0221ce8b&query";
  console.log(url);

  return (
    <>
      <NavBar />
      <p>search page</p>
      <div className="text-white h-[90vh] flex justify-center items-center content-center mx-20 bg-contain shadow-lg shadow-indigo-500/40 rounded-md bg-center bg-no-repeat bg-[url('./assets/images/searchpage-header.png')]">
      <SearchBar/>
      </div>
      <Footer />
    </>
  );
}

export default Searchpage;
