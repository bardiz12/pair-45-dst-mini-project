import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { selectIsLoggedIn } from "../store/userStore";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../authentication/firebase";


const GuestComponent = ({ children }) => {
    const [loggedInUser, isLoading] = useAuthState(auth);
    const navigate = useNavigate()

    useEffect(() => {
        if (isLoading) {
            return;
        }

        if (loggedInUser) {
            navigate("/movie");
            return;
        }
    }, [isLoading, loggedInUser, navigate]);

    if (isLoading) {
        return;
    } else {
        return children;
    }
}

export default GuestComponent