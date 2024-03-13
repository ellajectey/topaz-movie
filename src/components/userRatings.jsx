import React, { useState, useEffect } from 'react';
import axios from 'axios'; 

export default function UserRatings({movieId}) {

  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const apiKey = 'ca3c8ec02c3168db9a39ea17a1dcf0a9'; 
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${apiKey}`);
        setReviews(response.data);
      } 
      catch (error) {
        console.error('Error fetching movie:', error);
      }
    };

    fetchReviews();
  }, [reviews]);

    return(
        <>
            {
            reviews.map((review, key) => {
                return (
                    <div key={key}>
                        <span>{review.author}</span>
                        <span>{review.rating}</span>
                        <span>{review.content}</span>
                    </div>
                )
            })
            }
            <p className="text-3xl font-bold underline">user ratings code goes here</p>
        </>
    )
}