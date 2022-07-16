import React, { createRef, useEffect, useRef, useState } from "react";
import { getOffset } from "../utils/utilities";

const Carousel = ({ carouselItems, ItemComponent, showSelected = false}) => {

    const [currentIndex, setCurrentIndex] = useState(0)
    const [nextEnabled, setNextEnabled] = useState(true)
    const [prevEnabled, setPrevEnabled] = useState(true)

    const totalItems = carouselItems.length

    const itemRefs = carouselItems.reduce((prev, current, index) => {
        prev[index] = createRef()
        return prev
    }, {})

    // console.log(itemRefs);

    const goToItem = (i) => {
        setCurrentIndex(i)
        itemRefs[i].current.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'start',
        })
    }

    const nextSlide = (e) => {
        goToItem(currentIndex >= totalItems - 1 ? 0 : currentIndex + 1);
    }
    const prevSlide = (e) => {
        goToItem(currentIndex == 0 ? totalItems - 1 : currentIndex - 1);
    }

    // useEffect(() => {
    //     setPrevEnabled(currentIndex > 0)
    //     setNextEnabled(currentIndex <= totalItems - 1)
    // }, [currentIndex, totalItems])

    return (
        <>
            <div className="carousel mx-auto">
                <div className="relative overflow-hidden">
                    <div className="flex justify-between absolute top left w-full h-full">
                        <button
                            disabled={!prevEnabled}
                            onClick={prevSlide}
                            className="hover:bg-netflix-dark/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-12 w-20 -ml-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                            <span className="sr-only">Prev</span>
                        </button>
                        <button
                            disabled={!nextEnabled}
                            onClick={nextSlide}
                            className="hover:bg-netflix-dark/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-12 w-20 -ml-10"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M20 5l7 7-7 7"
                                />
                            </svg>
                            <span className="sr-only">Next</span>
                        </button>
                    </div>
                    <div
                        className="carousel-container relative flex gap-2 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
                    >
                        {carouselItems.map((resource, index) => {
                            return (
                                <ItemComponent 
                                    innerRef={itemRefs[index]}
                                    key={index}
                                    currentIndex={currentIndex}
                                    index={index}
                                    carouselItem={resource}
                                />
                            // <div
                            //     ref={itemRefs[index]}
                            //     key={index}
                            //     className={`carousel-item text-center relative w-full h-44 snap-start`}
                            // >
                            //     <a
                            //         href={resource.link}
                            //         className="h-full w-96 block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
                            //         style={{ backgroundImage: `url(${resource.imageUrl || ''})` }}
                            //     >
                            //         <img
                            //             src={resource.imageUrl || ''}
                            //             alt={resource.title}
                            //             className="w-full hidden"
                            //         />
                            //     </a>
                            //     <a
                            //         href={resource.link}
                            //         className={`flex justify-center items-center h-full w-full block absolute top-0 left-0 transition-opacity duration-300 ${currentIndex === index && showSelected ? 'opacity-100' : 'opacity-0'} hover:opacity-100 bg-netflix-dark/75 z-10`}
                            //     >
                            //         <h3 className="text-white m-auto text-xl">
                            //             {resource.title}
                            //         </h3>
                            //     </a>
                            // </div>
                        );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Carousel