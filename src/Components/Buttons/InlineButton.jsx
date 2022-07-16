import React from "react";

const InlineButton = ({ children, size, type, className, ...otherProps }) => {

    let padding
    if (size === 'medium') {
        padding = 'py-4'
    } else if (size === 'large') {
        padding = 'py-6'
    } else {
        padding = 'py-2'
    }


    return (
        <button type={type || 'button'} className={`w-auto px-5 text-black font-bold bg-white hover:bg-gray-200 ${padding} ${className}`} {...otherProps}>
            {children}
        </button>
    )
}

export default InlineButton