import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutFirebase } from "../../authentication/firebase";
import { logout, notLoggedIn, selectIsLoggedIn } from "../../store/userStore";

const Logout = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    const navigate = useNavigate()

    const dispatcher = useDispatch()

    useEffect(() => {
        if (isLoggedIn) {
            logoutFirebase().then((val) => {
                console.log(val);
                dispatcher(notLoggedIn())
            })
        } else {
            navigate('/')
        }
    }, [isLoggedIn, navigate, dispatcher])
}

export default Logout