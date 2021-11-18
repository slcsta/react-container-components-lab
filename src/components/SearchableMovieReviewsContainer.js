import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'guE52RpquRxuetDpfKAGTSHvy4zsAa2F';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends React.Component {

    constructor() {
        super();

        this.state = {
        reviews: [],
        searchTerm: ""
        }
    }

    handleSearch = (event) => 
        this.setState({ searchTerm: event.target.value })

    handleSubmit = (event) => {
        event.preventDefault();
        fetch(URL.concat(this.state.searchTerm))
            .then((response) => response.json())
            .then((response) => this.setState({reviews: response.results }))
    }
    
    render() {
        return( 
            <div className="latest-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <input
                    onChange={this.handleSearchInputChange} />
                    <button type="submit">Submit</button>
                    </form>

                    <MovieReviews reviews={this.state.reviews} />
                
            </div>
        )
    }

}

export default SearchableMovieReviewsContainer;