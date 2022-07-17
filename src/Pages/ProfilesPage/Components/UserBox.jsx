import React from "react";

const UserBox = function ({ user, ...props }) {
    return (
        <div className="text-center flex-col gap-2 text-white w-32 hover:w-48 hover:cursor-pointer" {...props}>
            <img src={user.photoURL} alt={`${user.displayName} profile`} />
            <span>{user.displayName}</span>
        </div>
    )
}

export default UserBox