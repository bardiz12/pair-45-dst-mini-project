import React from "react";

const RedButton = ({ children, size, type, ...otherProps }) => {

    let padding
    if (size === 'medium') {
        padding = 'py-4'
    } else if (size === 'large') {
        padding = 'py-6'
    } else {
        padding = 'py-2'
    }


    return (
        <button type={type || 'button'} className={`w-full bg-netflix-red hover:bg-red-800 ${padding}`} {...otherProps}>
            {children}
        </button>
    )
}

export default RedButton