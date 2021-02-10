import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component {
    state = {
        isLoading: true,
        movies: [],
    };

    getMovies = async () => {
        // movies.data.data.movies => {data : { data : {movies}}} ES6 문법
        const {
            data: {
                data: { movies },
            },
        } = await axios.get(
            "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
        );

        this.setState({ movies, isLoading: false });
    };

    componentDidMount() {
        this.getMovies();
    }

    renderMovies = () => {
        const { movies } = this.state;

        console.log(movies);

        return movies.map((movie) => {
            return (
                <Movie
                    key={movie.id}
                    id={movie.id}
                    year={movie.year}
                    title={movie.title}
                    summary={movie.summary}
                    poster={movie.medium_cover_image}
                />
            );
        });
    };

    render() {
        const { isLoading } = this.state;
        return <div>{isLoading ? "Loading" : this.renderMovies}</div>;
    }
}

export default App;
