import React, { useState } from "react";
import RatingStar from "./RatingStar";

const NOT_AVAILABLE = 'not_available';
const YES = 'yes';
const NO = 'no';

const Review = ({ review }) => {
    const [summary, setSummary] = useState(review.content.length > 250 ? YES : NOT_AVAILABLE)

    const readMoreClickHandler = () => {
        setSummary(summary === YES ? NO : YES);
    }
    return (
        <div className="flex flex-col w-full bg-netflix-blue p-8">
            <div className="flex gap-4">
                <img
                    src={review.profile_image_url}
                    alt={`avatar ${review.author}`}
                    className="w-16 h-16 rounded-md"
                />
                <div className="flex flex-col">
                    <span className="font-bold">{review.author}</span>
                    <span>
                        <RatingStar count={review.author_details.rating / 2} max={5} />
                    </span>
                </div>
            </div>
            <div className="flex">
                <hr />
                <div className="text-md mt-2 transition-all duration-75 ease-in-out">
                    {
                        summary === NO || summary === NOT_AVAILABLE ? review.content : review.content.substring(0, 250)
                    }
                    {
                        summary === YES
                            ? (
                                <>...
                                    <div className="w-full block">
                                        <span className="hover:italic hover:cursor-pointer" onClick={readMoreClickHandler}>[Read more]</span>
                                    </div>
                                </>
                            )
                            : ''
                    }
                    {
                        summary === NO
                            ? (
                                <div className="w-full block">
                                    <span className="hover:italic hover:cursor-pointer" onClick={readMoreClickHandler}>[Collapse]</span>
                                </div>
                            )
                            : ''
                    }
                </div>
            </div>
        </div>
    )
}

export default Review