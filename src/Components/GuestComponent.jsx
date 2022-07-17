import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { selectIsLoggedIn } from "../store/userStore";


const GuestComponent = ({ children }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    const navigate = useNavigate()

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/movie')
        }
    }, [isLoggedIn, navigate])

    return children
}

export default GuestComponent