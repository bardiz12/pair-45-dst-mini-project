import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import RedButton from "../../Components/Buttons/RedButton";
import Input from "../../Components/Input";
import { addUser, changeImageChoosen, loggedIn, selectUserList, setLoggedInUser } from "../../store/userStore";
import { convertFormToObject } from "../../utils/utilities";
import useTitle from "../../utils/useTitle"
import { useAuthState } from "react-firebase-hooks/auth";
import auth, { loginFirebase } from "../../authentication/firebase";

const LoginUserPage = () => {

    useTitle('Login')

    const { state } = useLocation();
    const [email, setEmail] = useState((state || {}).email || '')
    const dispatcher = useDispatch()
    const navigate = useNavigate()

    dispatcher(changeImageChoosen({ id: (state || {}).photoURL || 1 }))

    const [loggedInUser, isLoading, error] = useAuthState(auth);

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const payload = convertFormToObject(e.target)

        const { email, password } = payload
        const { success, message } = await loginFirebase(email, password)
        if (success === false) {
            alert(message)
        }
    }

    useEffect(
        () => {
            console.log(isLoading)
            if (isLoading) {
                return;
            }

            if (loggedInUser) {
                dispatcher(addUser({
                    user: {
                        email: loggedInUser.email,
                        displayName: loggedInUser.displayName,
                        photoURL: loggedInUser.photoURL,
                    }
                }))
                navigate("/movie");
            }

        },
        [loggedInUser, isLoading, navigate, dispatcher]
    );


    return (
        <>
            <div className="flex text-white h-screen">
                <div className="flex flex-col w-full justify-center items-center gap-8">
                    <h1 className="text-4xl">Login</h1>
                    <div className="flex px-8 md:px-0 w-full md:w-3/4 lg:w-1/2  justify-center items-center">
                        <form className='gap-4 w-full flex flex-col' onSubmit={onSubmitHandler} >
                            <Input type="email" placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <Input type="password" placeholder="Password" name="password" />
                            <RedButton size="medium" type="submit" disabled={isLoading}>
                                <span>{isLoading ? 'Checking...' : 'Login'}</span>
                            </RedButton>
                        </form>
                    </div>
                    <Link to="/">Back to profile page</Link>
                </div>
            </div>
        </>
    )
}

export default LoginUserPage