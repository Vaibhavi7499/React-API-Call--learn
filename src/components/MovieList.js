import React, { Component } from "react";

export class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  render() {
    console.log(this.props);
    return (
      <div className="container col-md-4 mt-3">
        {this.props.movies.map((movie) => (
          <div className="card mb-3" style={{ width: 18 + "rem" }}>
            <img
              className="card-img-top"
              src={movie?.image}
            />
            <div className="card-body">
              <h5 className="card-name">{movie?.name}</h5>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default MovieList;
