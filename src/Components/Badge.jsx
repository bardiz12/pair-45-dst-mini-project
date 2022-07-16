import React from "react";

const Badge = ({ children, color, ...props }) => {
    return <span className={`p-1 rounded-md ${color || 'bg-gray-700'}`} {...props}>{children}</span>
}

export default Badge