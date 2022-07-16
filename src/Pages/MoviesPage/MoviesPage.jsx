import React from "react";
import Container from "../../Components/Container.jsx";
import NowPlayingMovies from "./components/NowPlayingMovies.jsx";
import PopularMovies from "./components/PopularMovies.jsx";
import TopRatedMovies from "./components/TopRatedMovies.jsx";

const MoviesPage = () => {
    return (
        <>
            <div className="bg-netflix-dark text-white">
                <Container>
                    <NowPlayingMovies />
                    <PopularMovies />
                    <TopRatedMovies />
                </Container>
            </div>
        </>
    )
}

export default MoviesPage