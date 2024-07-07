import React, { Component } from "react";
import MovieList from "./MovieList";

class MovieSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInput: "",
      movies: [
        {
          id: 1,
          name: "Dangal",
          image:
          "https://images.news18.com/ibnlive/uploads/2016/11/dangal.jpg"
            //"https://images-na.ssl-images-amazon.com/images/M/MV5BMjMwNzMzMTQ0Ml5BMl5BanBnXkFtZTgwNjExMzUwNjE@._V1_SX300.jpg",
        },
        {
          id: 2,
          name: "Gentleman",
          image:"https://m.media-amazon.com/images/M/MV5BMTlkMmVmYjktYTc2NC00ZGZjLWEyOWUtMjc2MDMwMjQwOTA5XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_FMjpg_UX1000_.jpg"
            //"https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5ODAyNzA4OV5BMl5BanBnXkFtZTcwNzYwNTIzNA@@._V1_SX300.jpg",
        },
        {
          id: 3,
          name: "Tanaji",
          image:"data:image/jpeg;base64,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"
            //"https://images-na.ssl-images-amazon.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SX300.jpg",
        },
        {
          id: 4,
          name: "Bigil",
          image:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/201910/Bigil1_5.jpeg?size=1200:675"
            //"https://images-na.ssl-images-amazon.com/images/M/MV5BMTg0MTU1MTg4NF5BMl5BanBnXkFtZTgwMDgzNzYxMTE@._V1_SX300.jpg",
        },
        {
          id: 5,
          name: "The Ghost",
          image:"https://stat4.bollywoodhungama.in/wp-content/uploads/2022/05/The-Ghost-2-1.jpg"
            //"https://images-na.ssl-images-amazon.com/images/M/MV5BMTMzODU0NTkxMF5BMl5BanBnXkFtZTcwMjQ4MzMzMw@@._V1_SX300.jpg",
        },
        {
          id: 6,
          name: "Sanam Teri Kasam",
          image:"https://akamaividz2.zee5.com/image/upload/w_822,h_462,c_scale,f_webp,q_auto:eco/resources/0-0-sanamterikasam/list/sanamterikasam740x416.jpg",
            //"https://images-na.ssl-images-amazon.com/images/M/MV5BMjA4ODQ3ODkzNV5BMl5BanBnXkFtZTYwOTc4NDI3._V1_SX300.jpg",
            
        },
        {
          id: 7,
          name: "Dil Hai Tumhara",
          image:"https://upload.wikimedia.org/wikipedia/en/c/c6/DHTDVD.jpg"
            //"https://images-na.ssl-images-amazon.com/images/M/MV5BNThiYjM3MzktMDg3Yy00ZWQ3LTk3YWEtN2M0YmNmNWEwYTE3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        },
        {
          id: 8,
          name: "Mujhse Shadi Karogi",
          image:"https://i.ytimg.com/vi/n7MjuaR7ZlI/maxresdefault.jpg"
            //"http://ia.media-imdb.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_SX300.jpg",
        },
        {
          id: 9,
          name: "Hum Sath Sath Hain",
          image:"https://m.media-amazon.com/images/M/MV5BNDdkZTI3OTItM2JlZi00YzRmLTliMTctYTVjZDE3MjNlZTJkXkEyXkFqcGdeQXVyODk2ODI3MTU@._V1_QL75_UX820_.jpg"
            //"https://images-na.ssl-images-amazon.com/images/M/MV5BMjkyMTE1OTYwNF5BMl5BanBnXkFtZTcwMDIxODYzMw@@._V1_SX300.jpg",
        },
        {
          id: 10,
          name: "Raja Hindustani",
          image:"https://m.media-amazon.com/images/M/MV5BM2Q1NGRiOTctMWQyMC00N2RiLTg5YTMtM2JiMGI0ZTAyNjQwXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg"
            //"https://images-na.ssl-images-amazon.com/images/M/MV5BMjkyMTE1OTYwNF5BMl5BanBnXkFtZTcwMDIxODYzMw@@._V1_SX300.jpg",
        },
      ],
    };
  }

  getSearchValue(e) {
    this.setState({
      searchInput: e.target.value,
    });
  }

  searchMovie = () => {
    console.log(this.state.movies, 'before');
    this.setState({
      movies: this.state.movies.filter(
        (ele) => ele.name.toLowerCase() == this.state.searchInput.toLowerCase()
      ),
    }, () => {
    console.log(this.state.movies, 'After');

    });
  };

  render() {
    return (
      <div>
        <h1>MovieSearch</h1>
        <input
          type="text"
          placeholder="Search by Name"
          value={this.state.searchInput}
          onChange={(e) => this.getSearchValue(e)}
        />{" "}
        <button className="btn btn-success" onClick={this.searchMovie}>
          search
        </button>
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}

export default MovieSearch;
