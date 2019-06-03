import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class MovieItem extends Component {
  render() {
    console.log(this.props.id)
    return (
      <>
        <div className="body-cont">
          <Link to={`/movie/page/${this.props.id}`} >
            <img
              src={`https://image.tmdb.org/t/p/w500/${this.props.movies.poster_path}`}
            />
          </Link>
          <h2>Rating:{this.props.movies.vote_average}</h2>
        </div>
      </>
    )
  }
}

export default MovieItem
