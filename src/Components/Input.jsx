import React from "react";

const Input = ({ size, ...props }) => {
    size = size ?? 'large'
    return (
        <input className={
            `w-full bg-gray-700 text-white
                ${size === 'small' ? 'h-4 px-1' : ''} 
                ${size === 'medium' ? 'h-8 px-2' : ''} 
                ${size === 'large' ? 'h-16 px-5' : ''}
            `} {...props} />
    )
}

export default Input