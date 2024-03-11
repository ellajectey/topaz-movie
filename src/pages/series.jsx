import React from "react";
import NavBar from "../components/navBar";
import Footer from "../components/footer";
import { useState, useEffect } from "react";

function Series(props) {
  const SeriesPage = () => {
    const [series, setSeries] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchSeries = async () => {
        try {
          const response = await fetch(
            "https://www.omdbapi.com/?s=series&type=series&apikey=6f943394"
          );
          const data = await response.json();
          if (data.Response === "True") {
            setSeries(data.Search);
          } else {
            setError(data.Error);
          }
          setLoading(false);
        } catch (error) {
          setError(error.message);
          setLoading(false);
        }
      };

      fetchSeries();
    }, []);

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-semibold mb-4">Popular Series</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {series.map((seriesItem) => (
            <div
              key={seriesItem.imdbID}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={seriesItem.Poster}
                alt={seriesItem.Title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">
                  {seriesItem.Title}
                </h2>
                <p className="text-gray-700">{seriesItem.Year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <NavBar />
      <p>series page goes here</p>
      <Footer />
    </>
  );
}

export default Series;
