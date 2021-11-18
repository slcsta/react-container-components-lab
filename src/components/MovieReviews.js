// Code MovieReviews Here
//import { render } from 'enzyme'
import React from 'react'

const MovieReviews = ({ reviews }) => {
    return(
        <div className="review-list">
            {reviews.map(Review)}
        </div> 
    )
}

MovieReviews.defaultProps = {
    reviews: []
}

const Review = ({ title }) => {
    return(
        <div className = "review">
            <h3>{title}</h3>
        </div>
    )
}

export default MovieReviews