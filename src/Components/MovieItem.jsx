import React from "react";
import { Link } from "react-router-dom";

const MovieItem = ({ movie, ...props }) => {
    return (
        <div
            className={`carousel-item text-center relative w-full snap-start`}
            {...props}
        >
            <Link
                to={`/movie/${movie.id}`}
                className="h-full w-full block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
                style={{ backgroundImage: `url(${movie.image_url || ''})` }}
            >
            <img
                src={movie.image_url || ''}
                alt={movie.title}
                className="w-full h-100 md:h-64"
            />
            </Link>
            <Link
                to={`/movie/${movie.id}`}
                className={`flex justify-center items-center h-full w-full absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100 bg-netflix-dark/75 z-10`}
            >
                <h3 className="text-white m-auto text-xl">
                    {movie.title}
                </h3>
            </Link>
        </div>
    )
}

export default MovieItem