import React, { Children, useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { selectloggedInUser } from "../store/userStore";


const ProtectedComponent = ({ children }) => {
    const loggedInUser = useSelector(selectloggedInUser)
    const navigate = useNavigate()

    useEffect(() => {
        // console.log(loggedInUser)
        if (loggedInUser == null) {
            navigate('/')
        }
    }, [loggedInUser, navigate])

    return children
}

export default ProtectedComponent