import React from "react";
import Carousel from "../../../Components/Carousel";
import CarouselItem from "../../../Components/CarouselItem";
import MovieSectionHeader from "../../../Components/MovieSectionHeader";
import { usePopularQuery } from "../../../services/tmdbApi";
import { getTmdbImageUrl } from "../../../utils/utilities";

const OnTheAgenda = () => {
  const { data, error, isLoading } = usePopularQuery();

  return (
    <>
      <MovieSectionHeader title="On The Agenda" />
      {error && "Terjadi kesalahan saat mengambil data"}

      {isLoading && "Loading..."}
      {!(error || isLoading) && (
        <div className="pt-4 pb-8">
          <Carousel
            carouselItems={data.results.map((item) => ({
              link: `/movie/${item.id}`,
              imageUrl: getTmdbImageUrl(item.backdrop_path, "500"),
              title: item.title,
            }))}
            ItemComponent={CarouselItem}
          />
        </div>
      )}
    </>
  );
};

export default OnTheAgenda;
