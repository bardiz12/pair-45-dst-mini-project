import React, { useRef, useState } from "react";
import Badge from "../../../Components/Badge";
import InlineButton from "../../../Components/Buttons/InlineButton";
import Container from "../../../Components/Container";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import MovieSectionHeader from "../../../Components/MovieSectionHeader";
import { getTmdbImageUrl } from "../../../utils/utilities";
import Review from "../../../Components/Review";
import Rating from "../../../Components/Rating"

const MovieDetailContent = ({ movie }) => {
    const youtubeVideos = movie.videos.results.filter((item) => item.site === 'YouTube')
    const trailerVideo = youtubeVideos.filter((item) => item.type === 'Trailer')[0] || null
    const [selectedVideo, setSelectedVideo] = useState(trailerVideo)

    const videoContainer = useRef()

    const changeVideo = (video) => {
        setSelectedVideo(video)
    }

    const watchTrailer = (e) => {
        setSelectedVideo(trailerVideo)
        videoContainer.current.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'start',
        });
    }
    return (
        <>
            <Container size="3xl">
                <div className="w-full h-[calc(100vh-8rem)]" style={{ background: `url(${movie.images.backdrop}) center / cover no-repeat` }}>
                    <div className="w-full h-full">
                        <Container size="lg" className="h-full">
                            <div className="flex h-full items-end md:items-center md:pl-8 md:pb-8 text-white">
                                <div className="p-4 w-full md:w-1/2  bg-netflix-blue opacity-70">
                                    <h1 className="text-3xl font-extrabold">
                                        {movie.title}
                                    </h1>
                                    <div className="mt-4 flex flex-wrap gap-1 text-sm">
                                        {movie.genres.map(({ id, name }) => <Badge key={id}>{name}</Badge>)}
                                    </div>
                                    <div className="mt-4 flex flex-wrap gap-1 text-sm">
                                        {movie.release_date.split("-")[0]}
                                    </div>
                                    <div className="mt-4 flex gap-2">
                                        <InlineButton className={`rounded-sm ${!trailerVideo && 'cursor-not-allowed'}`} disabled={!trailerVideo} onClick={watchTrailer}>
                                            <FontAwesomeIcon icon={faYoutube} /> Watch Trailer
                                        </InlineButton>
                                        <InlineButton className="rounded-sm">
                                            <FontAwesomeIcon icon={faInfoCircle} /> More Information
                                        </InlineButton>
                                    </div>
                                    <p className="mt-4 text-sm">
                                        {movie.overview}
                                    </p>
                                    <div className="mt-2">
                                        <Rating rate={movie.vote_average} reviewCount={movie.reviews.total_results} />
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </div>
                </div>
            </Container>

            <Container size="lg" className="w-full">
                <MovieSectionHeader title="Trailer & Videos" />
                <div className="w-full flex flex-col md:flex-row gap-4 mt-4">
                    <div className="w-100 md:w-3/4" ref={videoContainer}>
                        <iframe width="100%" height="480" src={`https://www.youtube.com/embed/${selectedVideo.key}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className="w-full md:w-1/4 px-2">
                        <h4>Another Video</h4>
                        <div className="bg-netflix-blue opacity-60 p-4 mt-2 flex flex-col gap-2 h-96 overflow-scroll">
                            {
                                youtubeVideos.map(video => {
                                    return (<div className="w-full" key={video.id}>
                                        <InlineButton className={`text-left rounded-sm ${!selectedVideo && 'cursor-not-allowed'} ${(selectedVideo.key === video.key ? 'bg-netflix-red hover:bg-red-900' : '')}`} onClick={(e) => changeVideo(video)}>
                                            <FontAwesomeIcon icon={faYoutube} />{video.name}  <sup className="text-gray-500 text-xs">{video.type}</sup>
                                        </InlineButton>
                                    </div>)
                                })
                            }
                        </div>
                    </div>
                </div>


                <div className="w-full flex flex-col md:flex-row justify-items-start gap-4 mt-8">
                    <div className="w-full md:w-1/4">
                        <MovieSectionHeader title="Poster" />
                        <img className="mt-2 w-full" src={getTmdbImageUrl(movie.poster_path, 500)} alt="Poster Film" />
                    </div>
                    <div className="w-full md:w-3/4">
                        <MovieSectionHeader title="Reviews" />
                        <div className="mt-2 bg-netflix-blue w-full p-4 flex flex-col gap-2">
                            {
                                movie.reviews.results
                                    .map(review => ({ ...review, profile_image_url: getTmdbImageUrl(review.author_details.avatar_path, 185) }))
                                    .filter(review => review.profile_image_url !== null || review.profile_image_url !== undefined)
                                    .map(review => <Review key={review.id} review={review} />)
                            }
                        </div>
                    </div>
                </div>


            </Container>
        </>
    )
}

export default MovieDetailContent