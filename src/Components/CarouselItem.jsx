import React from "react";
import { Link } from "react-router-dom";

const CarouselItem = ({ carouselItem, currentIndex, index, innerRef, showSelected, ...props }) => {
    // console.log(props);
    return (
        <div
            className={`carousel-item text-center relative w-full h-44 snap-start`}
            ref={innerRef}
            {...props}
        >
            <Link
                to={carouselItem.link}
                className="h-full w-screen md:w-96 block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
                style={{ backgroundImage: `url(${carouselItem.imageUrl || ''})` }}
            >
                {/* <img
                    src={carouselItem.imageUrl || ''}
                    alt={carouselItem.title}
                    className="w-full hidden"
                /> */}
            </Link>
            <Link
                to={carouselItem.link}
                className={`flex justify-center items-center h-full w-full absolute top-0 left-0 transition-opacity duration-300 ${currentIndex === index && showSelected ? 'opacity-100' : 'opacity-0'} hover:opacity-100 bg-netflix-dark/75 z-10`}
            >
                <h3 className="text-white m-auto text-xl">
                    {carouselItem.title}
                </h3>
            </Link>
        </div>
    )
}

export default CarouselItem