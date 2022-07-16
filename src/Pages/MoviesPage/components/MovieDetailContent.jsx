import React, { useRef, useState } from "react";
import Badge from "../../../Components/Badge";
import InlineButton from "../../../Components/Buttons/InlineButton";
import Container from "../../../Components/Container";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import MovieSectionHeader from "../../../Components/MovieSectionHeader";
import { useNavigate } from "react-router-dom";
import { getTmdbImageUrl } from "../../../utils/utilities";

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
                                    <div class="flex items-center mt-2">
                                        <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <p class="ml-2 text-sm font-bold text-white ">{movie.vote_average}</p>
                                        <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                                        <a href="#" class="text-sm font-medium text-white underline hover:no-underline">{movie.reviews.total_results} reviews</a>
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
                        <iframe width="100%" height="480" src={`https://www.youtube.com/embed/${selectedVideo.key}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="w-full md:w-1/4 px-2">
                        <h4>Another Video</h4>
                        <div className="bg-netflix-blue opacity-60 p-4 mt-2 flex flex-col gap-2 h-96 overflow-scroll">
                            {
                                youtubeVideos.map(video => {
                                    return (<div className="w-full">
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
                    <div className="">
                        <MovieSectionHeader title="Poster" />
                        <img className="w-64" src={getTmdbImageUrl(movie.poster_path, 500)} />
                    </div>
                    <div className="px-2">
                        <MovieSectionHeader title="Reviews" />
                        <div className="bg-netflix-blue w-full opacity-60 p-4 mt-2 flex flex-col gap-2 h-96 overflow-scroll">
                            {
                                youtubeVideos.map(video => {
                                    return (<div className="w-full">
                                        <InlineButton className={`text-left rounded-sm ${!selectedVideo && 'cursor-not-allowed'} ${(selectedVideo.key === video.key ? 'bg-netflix-red hover:bg-red-900' : '')}`} onClick={(e) => changeVideo(video)}>
                                            <FontAwesomeIcon icon={faYoutube} />{video.name}  <sup className="text-gray-500 text-xs">{video.type}</sup>
                                        </InlineButton>
                                    </div>)
                                })
                            }
                        </div>
                    </div>
                </div>


            </Container>
        </>
    )
}

export default MovieDetailContent