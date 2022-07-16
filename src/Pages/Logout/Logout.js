import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout, selectloggedInUser } from "../../store/userStore";

const Logout = () => {
    const loggedInUser = useSelector(selectloggedInUser)
    const navigate = useNavigate()

    const dispatcher = useDispatch()

    useEffect(() => {
        if (loggedInUser) {
            dispatcher(logout())
        } else {
            navigate('/')
        }
    }, [loggedInUser, navigate, dispatcher])
}

export default Logout