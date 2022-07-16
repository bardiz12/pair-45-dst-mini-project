import React, { useEffect, useState } from "react";
import Carousel from "../../Components/Carousel.jsx";
import CarouselItem from "../../Components/CarouselItem.jsx";
import Container from "../../Components/Container.jsx";
import MovieSectionHeader from "../../Components/MovieSectionHeader.jsx";
import { usePopularQuery } from "../../services/tmdbApi.js";
import { getTmdbImageUrl } from "../../utils/utilities.js";
import NowPlayingMovies from "./components/NowPlayingMovies.jsx";
import PopularMovies from "./components/PopularMovies.jsx";
import TopRatedMovies from "./components/TopRatedMovies.jsx";

const MoviesPage = () => {
    const { data, error, isLoading } = usePopularQuery()
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