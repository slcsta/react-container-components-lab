import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'your-key-here';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends Component {
    // should have a state property "reviews"
    constructor() {
        super();

        this.state = {
        reviews: []
        }
    }

    componentDidMount() {
        fetch(
            URL
        )
        .then((response) => response.json())
        .then((reviewData) => this.setState({reviews: reviewData.reviews}))
    }

    render() {
        return( 
        <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews} />
        </div>
        )
    }
}

export default LatestMovieReviewsContainer