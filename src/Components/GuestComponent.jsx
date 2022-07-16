import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { selectloggedInUser } from "../store/userStore";


const GuestComponent = () => {
    const loggedInUser = useSelector(selectloggedInUser)
    const navigate = useNavigate()

    useEffect(() => {
        if (loggedInUser) {
            navigate('/movie')
        }
    }, [loggedInUser, navigate])

    return (<>
        <Outlet />
    </>)
}

export default GuestComponent