import React from "react";
import { Link } from "react-router-dom";
import Badge from "./Badge"
const CarouselItemJumbotron = ({ carouselItem, currentIndex, index, innerRef, showSelected, ...props }) => {
    return (
        <div
            className={`carousel-item text-centerx relative w-full h-[480px] snap-start`}
            ref={innerRef}
            {...props}
        >
            {/* <div className="flex flex-row w-screen px-4">
                <div className="w-1/2">
                    a
                </div>
                <div
                    className="w-1/2 h-[480px] block bg-origin-padding bg-cover bg-no-repea"
                    style={{ backgroundImage: `url(${carouselItem.imageUrl || ''})` }}>
                    a
                </div>
            </div> */}
            <div
                className="h-full w-screen block"
            >

            </div>
            <Link
                to={carouselItem.link}
                className={`flex h-full w-full block absolute top-0 left-0 transition-opacity duration-300 opacity-100 bg-netflix-dark/75 z-10`}
            >
                <div className="hidden w-1/2 h-full md:flex bg-netflix-blue pl-16 items-center">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-2xl">{carouselItem.title}</h3>
                        <div className="flex flex-wrap gap-2 text-sm">
                            {
                                carouselItem.genres.map(genre => (<Badge key={genre}>{genre}</Badge>))
                            }
                        </div>
                        <p>
                            {carouselItem.overview}
                        </p>
                    </div>

                </div>
                <div className="w-full md:w-1/2 h-full block bg-origin-padding bg-center bg-cover bg-no-repeat z-0"
                    style={{ backgroundImage: `url(${carouselItem.imageUrl || ''})` }}>

                    <div className="hidden md:flex w-full h-full  justify-start opacity-100">
                        <div className="w-32 h-full">
                            <div className="bg-gradient-to-r from-netflix-blue via-netflix-blue to-transparent h-full ">&nbsp;</div>
                        </div>
                    </div>
                    <div className="block md:hidden absolute bg-netflix-blue opacity-75 w-full p-4  bottom-0">
                        <h3 className="text-2xl">{carouselItem.title}</h3>
                        <div className="flex flex-wrap gap-2 text-sm">
                            {
                                carouselItem.genres.map(genre => (<Badge key={genre}>{genre}</Badge>))
                            }
                        </div>
                    </div>


                </div>
            </Link>
        </div>
    )
}

export default CarouselItemJumbotron