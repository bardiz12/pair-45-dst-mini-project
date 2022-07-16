import React from "react";

const UserBox = function ({ user, ...props }) {
    return (
        <div className="text-center flex-col gap-2 text-white w-32 hover:w-48 hover:cursor-pointer" {...props}>
            <img src={user.image} alt={`${user.username} profile`} />
            <span>{user.username}</span>
        </div>
    )
}

export default UserBox