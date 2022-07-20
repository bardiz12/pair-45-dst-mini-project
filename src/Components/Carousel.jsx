import React, { createRef, useRef, useState } from "react";
import { isElementVisibleInScrollContainer } from "../utils/utilities";

const Carousel = ({ carouselItems, ItemComponent, showSelected = false }) => {

    const [currentIndex, setCurrentIndex] = useState(0)

    const totalItems = carouselItems.length

    const itemRefs = carouselItems.reduce((prev, current, index) => {
        prev[index] = createRef()
        return prev
    }, {})

    const carouselContainer = useRef()

    const nextSlide = (e) => {
        let i = (currentIndex >= totalItems - 1 ? 0 : currentIndex + 1);
        const maxWidth = carouselContainer.current.scrollWidth - carouselContainer.current.clientWidth;
        const itemWidth = carouselContainer.current.firstChild.offsetWidth;

        if (itemWidth * (i + 1) > maxWidth) {
            i++;
        }

        const totalWidth = itemWidth * i;

        carouselContainer.current.scrollLeft = totalWidth
        if (maxWidth <= totalWidth) {
            i = totalItems - 1
        }
        console.log(i, totalWidth, maxWidth, totalItems);
        setCurrentIndex(i)

    }
    const prevSlide = (e) => {
        let i = currentIndex === 0 ? totalItems - 1 : currentIndex - 1;
        const maxWidth = carouselContainer.current.scrollWidth - carouselContainer.current.clientWidth;
        const itemWidth = carouselContainer.current.firstChild.offsetWidth;

        let totalWidth = itemWidth * i;

        if (totalWidth >= maxWidth) {
            i = i - 1 - Math.ceil((totalWidth - maxWidth) / itemWidth);
            totalWidth = itemWidth * i;
        }
        carouselContainer.current.scrollLeft = totalWidth
        console.log(i, totalWidth, maxWidth, totalItems);

        setCurrentIndex(i)
    }


    return (
        <>
            <div className="carousel mx-auto">
                <div className="relative overflow-hidden">
                    <div className="flex justify-between absolute top left w-full h-full">
                        <button
                            onClick={prevSlide}
                            disabled={currentIndex <= 0}
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
                            onClick={nextSlide}
                            disabled={currentIndex >= totalItems - 1}
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
                        ref={carouselContainer}
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
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Carousel