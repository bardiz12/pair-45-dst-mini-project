import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import auth from "../authentication/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import { selectloggedInUser } from "../store/userStore";


const ProtectedComponent = ({ children }) => {
    const [loggedInUser, isLoading] = useAuthState(auth);
    const navigate = useNavigate()

    useEffect(() => {
        if (isLoading) {
            return;
        }

        if (!loggedInUser) {
            navigate("/");
            return;
        }
    }, [isLoading, loggedInUser, navigate]);

    if (isLoading) {
        return;
    } else {
        return children;
    }
}

export default ProtectedComponent