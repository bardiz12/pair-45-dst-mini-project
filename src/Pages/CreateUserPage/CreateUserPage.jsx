import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import RedButton from "../../Components/Buttons/RedButton";
import Input from "../../Components/Input";
import userImage from "../../data/userImage";
import { addUser } from "../../store/userStore";
import { convertFormToObject } from "../../utils/utilities";

const CreateUserPage = () => {
    const [selectedPicture, setSelectedPicture] = useState(1);

    const navigate = useNavigate();

    const dispatcher = useDispatch()

    const onSubmitHandler = (event) => {
        event.preventDefault()
        const user = {
            ...convertFormToObject(event.target),
            image: selectedPicture
        }

        dispatcher(addUser({ user }))

        return navigate('/')
    };


    return (
        <>
            <div className="flex text-white h-screen">
                <div className="flex flex-col w-full justify-center items-center gap-8">
                    <h1 className="text-4xl">Create Profile</h1>
                    <div className="flex w-2/4  justify-center items-center">
                        <form className='gap-4 w-full flex flex-col' onSubmit={onSubmitHandler} >
                            <Input type="text" placeholder="USERNAME" name="username" />
                            <Input type="password" placeholder="PASSWORD" name="password" />
                            <div className="flex flex-wrap gap-2 justify-center">
                                {
                                    [1, 2, 3, 4].map(item => (
                                        <img key={item} className={`w-16 h-16 ${item === selectedPicture ? 'opacity-100' : 'opacity-25 hover:opacity-50 hover:cursor-pointer'}`} src={userImage.getImage(item)} alt="profile selector" onClick={() => setSelectedPicture(item)} />
                                    ))
                                }
                            </div>
                            <RedButton size="medium" type="submit">
                                <span>Register</span>
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