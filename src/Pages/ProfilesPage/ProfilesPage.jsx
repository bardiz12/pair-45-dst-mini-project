import React from 'react';
import userImage from '../../data/userImage';
import UserBox from './Components/UserBox';
import SvgAdd from '../../assets/button/add.svg';
import { useSelector } from 'react-redux';
import { selectUserList } from '../../store/userStore';
import { Link, useNavigate } from 'react-router-dom';

const ProfilesPage = function () {
    const userList = useSelector(selectUserList)
    const navigate = useNavigate()

    return (
        <>
            <div className='flex flex-col w-full items-center justify-center gap-10 py-6 bg-netflix-dark text-white' style={{ height: "calc(100vh - 85px)" }}>
                <h1 className='text-5xl'>Who's Watching ?</h1>
                <div className='flex w-full justify-center gap-4 items-center'>
                    {
                        userList.map(user => <UserBox user={{...user, image: userImage.getImage(user.image)}} onClick={(e) => navigate('auth/login', {
                            state: { username: user.username, image_id : user.image}
                        })} />)
                    }
                    <Link to='/auth/register'>
                        <div className='w-32 h-full flex justify-center items-center pb-4'>
                            <img src={SvgAdd} className="w-24 hover:w-32 hover:cursor-pointer" alt="add button" />
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}
export default ProfilesPage