import React, { useState, useEffect } from 'react';
import axios from 'axios'; 

export default function UserRatings({movieId}) {

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const apiKey = 'ca3c8ec02c3168db9a39ea17a1dcf0a9'; 
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${apiKey}`);
        setReviews(response.data.results);
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
                        <h5>{review.author}</h5>
                        <span style={{color: 'red'}} >{review.author_details.rating}</span><br />
                        {/* <p style={{whiteSpace: 'pre'}}>{review.content}</p> */}
                        <div dangerouslySetInnerHTML={{__html: review.content}}/>
                        
                        <br /><br /><br /> 
                    </div>
                )
            })
            }
        </>
    )
}