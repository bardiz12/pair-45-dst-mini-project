import React from "react";
import RatingStar from "./RatingStar";

const Review = ({ review }) => {
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
                <p className="text-md mt-2">
                    {review.content}
                </p>
            </div>
        </div>
    )
}

export default Review