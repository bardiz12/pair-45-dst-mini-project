import React from "react";
import Carousel from "../../../Components/Carousel";
import CarouselItem from "../../../Components/CarouselItem";
import MovieSectionHeader from "../../../Components/MovieSectionHeader";
import { useTopRatedQuery } from "../../../services/tmdbApi";
import { getTmdbImageUrl } from "../../../utils/utilities";

const TopRatedMovies = () => {
    const { data, error, isLoading } = useTopRatedQuery()

    return (
        <>
            <MovieSectionHeader title="Top Rated" />
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
                            imageUrl: getTmdbImageUrl(item.backdrop_path, '500'),
                            title: item.title,
                        }))} ItemComponent={CarouselItem} />
                    </div>
                )
            }
        </>
    )
}

export default TopRatedMovies