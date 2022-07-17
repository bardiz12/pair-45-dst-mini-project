import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../../Components/Container";
import MovieItem from "../../Components/MovieItem";
import { useSearchMovieQuery } from "../../services/tmdbApi";
import useTitle from "../../utils/useTitle";
import { getTmdbImageUrl } from "../../utils/utilities";
import noCover from "../../assets/noCover.jpg";
import FullButton from "../../Components/Buttons/FullButton.jsx"
const SearchMoviePage = () => {

    const navigate = useNavigate()
    const queryParams = new URLSearchParams(window.location.search)
    const term = queryParams.get("q")

    useTitle(`Search Movie : ${term}`)
    //state
    const [movies, setMovies] = useState([])
    const [page, setPage] = useState(1)
    //endstate

    useEffect(() => {
        if (term === '') {
            navigate('/movie')
        }
    }, [term, navigate])

    const { data: searchResult, error, isLoading } = useSearchMovieQuery({ term, page })

    useEffect(() => {
        if (!isLoading && !error) {
            setMovies(movies => {
                return [
                    ...movies,
                    ...searchResult.results
                ]
            })
        }
    }, [searchResult, error, isLoading])

    const loadMore = () => {
        setPage(page + 1)
    }

    return (
        <>
            <div className="bg-netflix-dark text-white">
                <Container>
                    <p className="pt-2 pb-8">
                        <h2>Search Result for : "<span className="font-bold">{term}</span>"</h2>
                    </p>
                    <div className="w-full flex flex-wrap">
                        {
                            (!isLoading && !error) && movies.map(movie => {
                                return (
                                    <div className="w-1/2 md:w-1/4 lg:w-1/6 h-100 px-2 mt-5">
                                        <MovieItem key={movie.id} movie={{
                                            ...movie,
                                            image_url: movie.poster_path === null ? noCover : getTmdbImageUrl(movie.poster_path, '500')
                                        }} />
                                    </div>
                                )
                            })
                        }
                    </div>
                    {
                        (!isLoading && !error) && (
                            (searchResult.page < searchResult.total_pages) && <>
                                <div className="w-full px-2 pt-4">
                                    <FullButton onClick={loadMore} disabled={isLoading}>{isLoading ? 'Loading...' : 'Load More'}</FullButton>
                                </div>
                            </>
                        )
                    }
                </Container>
            </div>
        </>
    )
}

export default SearchMoviePage;