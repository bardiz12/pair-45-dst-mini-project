import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMovieByIdQuery } from "../../services/tmdbApi.js";
import { getTmdbImageUrl } from "../../utils/utilities.js";
import MovieDetailContent from "./components/MovieDetailContent.jsx";
import PopularMovies from "./components/PopularMovies.jsx";
import useTitle from "../../utils/useTitle"

const MovieDetailPage = () => {
    const { id } = useParams()
    const { data: movie, error, isLoading } = useMovieByIdQuery({ id })

    useTitle(movie ? movie.title : '')
    return (
        <>
            <div className="bg-netflix-dark text-white">

                <span>
                    {
                        error && "Terjadi kesalahan saat mengambil data"
                    }
                    {
                        isLoading && "Loading"
                    }
                    {
                        !(isLoading || error) && (<MovieDetailContent movie={{
                            ...movie,
                            images: {
                                backdrop: getTmdbImageUrl(movie.backdrop_path, '1280'),
                                poster: getTmdbImageUrl(movie.poster, '500')
                            }
                        }} />)
                    }
                </span>

                <PopularMovies />
            </div>
        </>
    )
}

export default MovieDetailPage