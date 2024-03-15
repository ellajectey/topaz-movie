import React, { useState, useEffect } from "react";
import axios from "axios";


export default function UserRatings({ movieId }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const apiKey = "ca3c8ec02c3168db9a39ea17a1dcf0a9";
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${apiKey}`
        );
        setReviews(response.data.results);
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    };

    fetchReviews();
  }, [reviews]);

  return (
    <div className="bg-black bg-opacity-90 p-12 rounded-lg mx-auto py-4">
   
      {reviews.map((review, key) => {
        return (
          <div key={key}>
            <div className="inline-flex py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-10 h-10 text-orange-500"
              >
                <path
                  fillRule="evenodd"
                  d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  clipRule="evenodd"
                />
              </svg>
              <h5 className="text-yellow-100 text-1xl">{review.author}</h5>
            </div>
            {/* <p style={{whiteSpace: 'pre'}}>{review.content}</p> */}
            <div
              className="line-clamp-3 text-white"
              dangerouslySetInnerHTML={{ __html: review.content }}
            />
            <div className="text-yellow-500 inline-flex py-2 ">
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
              Rating: {review.author_details.rating} / 10
            </div>
            {/* <br /><br /><br />  */}
          </div>
        );
      })}
    </div>
  );
}
