import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../authentication/firebase";
import RedButton from "../../Components/Buttons/RedButton";
import Input from "../../Components/Input";
import userImage from "../../data/userImage";
import { addUser, loggedIn } from "../../store/userStore";
import useTitle from "../../utils/useTitle";
import { convertFormToObject } from "../../utils/utilities";

const CreateUserPage = () => {
    useTitle('Create Profile')
    const [selectedPicture, setSelectedPicture] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const dispatcher = useDispatch()

    const onSubmitHandler = async (event) => {
        setIsLoading(true)
        event.preventDefault()
        const payload = {
            ...convertFormToObject(event.target),
            image: selectedPicture
        }

        const { success, message, user } = await register(payload);
        setIsLoading(false)
        if (success) {
            dispatcher(loggedIn())
            dispatcher(addUser({
                user: {
                    displayName: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL
                }
            }))
            navigate('/movies')
        } else {
            alert(message)
        }
    };


    return (
        <>
            <div className="flex text-white h-screen">
                <div className="flex flex-col w-full justify-center items-center gap-8">
                    <h1 className="text-4xl">Create Profile</h1>
                    <div className="flex px-8 md:px-0 w-full md:w-3/4 lg:w-1/2  justify-center items-center">
                        <form className='gap-4 w-full flex flex-col' onSubmit={onSubmitHandler}>
                            <Input type="text" placeholder="Name" name="name" disabled={isLoading} />
                            <Input type="email" placeholder="Email" name="email" disabled={isLoading} />
                            <Input type="password" placeholder="Password" name="password" disabled={isLoading} />
                            <div className="flex flex-wrap gap-2 justify-center">
                                {
                                    [1, 2, 3, 4].map(item => (
                                        <img key={item} className={`w-16 h-16 ${item === selectedPicture ? 'opacity-100' : `opacity-25 ${isLoading ? '' : 'hover:opacity-50 hover:cursor-pointer'}`}`} src={userImage.getImage(item)} alt="profile selector" onClick={() => !isLoading && setSelectedPicture(item)} />
                                    ))
                                }
                            </div>
                            <RedButton size="medium" type="submit" disabled={isLoading}>
                                <span>{isLoading ? 'Creating Profile...' : 'Register'}</span>
                            </RedButton>
                        </form>
                    </div>
                    <Link to="/">Back to profile page</Link>
                </div>
            </div>
        </>
    )
}
export default CreateUserPage