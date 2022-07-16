import React, { useEffect } from "react";
import Carousel from "../../../Components/Carousel";
import CarouselItemJumbotron from "../../../Components/CarouselItemJumbotron";
import MovieSectionHeader from "../../../Components/MovieSectionHeader";
import { useGenreQuery, useNowPlayingQuery } from "../../../services/tmdbApi";
import { getTmdbImageUrl } from "../../../utils/utilities";

const NowPlayingMovies = () => {
    const { data, error, isLoading } = useNowPlayingQuery()
    const { data: genre, error: errorGenre, isLoading: isLoadingGenre } = useGenreQuery()

    const getGenres = (ids) => {
        return ((genre || {}).genres || []).filter(item => ids.includes(item.id)).map(item => item.name)
    }

    return (
        <>
            {
                error && "Terjadi kesalahan saat mengambil data"
            }

            {
                isLoading && "Loading..."
            }
            {
                !(error || isLoading) && (
                    <div className="pt-4 pb-8">
                        <Carousel carouselItems={data.results.map(item => ({
                            link: `/movie/${item.id}`,
                            imageUrl: getTmdbImageUrl(item.backdrop_path, '1280'),
                            title: item.title,
                            genres: getGenres(item.genre_ids),
                            overview: item.overview
                        }))} ItemComponent={CarouselItemJumbotron} />
                    </div>
                )
            }
        </>
    )
}

export default NowPlayingMovies