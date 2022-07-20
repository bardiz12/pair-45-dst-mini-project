import React from "react";

const UserBox = function ({ user, ...props }) {
    return (
        <div className="text-center flex-col gap-2 text-white w-32 hover:w-36 hover:cursor-pointer transition-all ease-in-out duration-200" {...props}>
            <img className="w-auto" src={user.photoURL} alt={`${user.displayName} profile`} />
            <span>{user.displayName}</span>
        </div>
    )
}

export default UserBox