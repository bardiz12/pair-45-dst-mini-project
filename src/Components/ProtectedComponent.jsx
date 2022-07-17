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
        // Di sini kita akan membuat logic, apabila user tidak ada (null), maka akan kita
        // "paksa" ke halaman login
        if (!loggedInUser) {
            navigate("/");
            return;
        }
    }, [loggedInUser, navigate]);

    if (isLoading) {
        return;
    } else {
        return children;
    }
}

export default ProtectedComponent