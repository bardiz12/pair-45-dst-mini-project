import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import RedButton from "../../Components/Buttons/RedButton";
import Input from "../../Components/Input";
import { changeImageChoosen, selectUserList, setLoggedInUser } from "../../store/userStore";
import { convertFormToObject } from "../../utils/utilities";

const LoginUserPage = () => {
    const { state } = useLocation();
    const [username, setUsername] = useState((state || {}).username || '')
    const dispatcher = useDispatch()
    const navigate = useNavigate()

    dispatcher(changeImageChoosen({ id: (state || {}).image_id || 1 }))

    const userList = useSelector(selectUserList)

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const payload = convertFormToObject(e.target)

        const { username, password } = payload
        const selectedUser = userList.filter((item) => {
            return item.username === username && item.password === password
        })[0] || null;

        if (selectedUser === null) {
            return alert("Invalid credentials!")
        } else {
            dispatcher(setLoggedInUser({ user: selectedUser }))
            navigate('/movie')
        }
    }



    return (
        <>
            <div className="flex text-white h-screen">
                <div className="flex flex-col w-full justify-center items-center gap-8">
                    <h1 className="text-4xl">Login</h1>
                    <div className="flex w-2/4  justify-center items-center">
                        <form className='gap-4 w-full flex flex-col' onSubmit={onSubmitHandler} >
                            <Input type="text" placeholder="USERNAME" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                            <Input type="password" placeholder="PASSWORD" name="password" />
                            {/* <div className="flex flex-wrap gap-2 justify-center">
                                {
                                    [1, 2, 3, 4].map(item => (
                                        <img className={`w-16 h-16 ${item === selectedPicture ? 'opacity-100' : 'opacity-25 hover:opacity-50 hover:cursor-pointer'}`} src={userImage.getImage(item)} alt="profile selector" onClick={() => setSelectedPicture(item)} />
                                    ))
                                }
                            </div> */}
                            <RedButton size="medium" type="submit">
                                <span>Login</span>
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