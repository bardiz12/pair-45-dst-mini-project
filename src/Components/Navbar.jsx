import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Logo from "../assets/logo.svg"
import { selectloggedInUser } from "../store/userStore";
import SearchIcon from '../assets/icons/Search.svg'
import NotificationBellIcon from '../assets/icons/NotificationBell.svg'
import GiftBoxIcon from '../assets/icons/GiftBox.svg'
import { Link } from 'react-router-dom'

const Navbar = function () {
    const loggedInUser = useSelector(selectloggedInUser)
    const isLoggedIn = loggedInUser !== null

    const [showDropdown, setShowDropdown] = useState(false)
    const refDropDown = useRef()

    useEffect(() => {
        const handleClickOutside = (event) => {

            if (refDropDown.current && !refDropDown.current.contains(event.target) && event.target.id !== 'userProfile') {
                setShowDropdown(false);
            }
        };
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, [showDropdown]);

    const dropDownNavbarHandler = (e) => {
        setShowDropdown(!showDropdown)
    }
    return (
        <>
            <div className="relative bg-netflix-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <Link to="/">
                                <span className="sr-only">Workflow</span>
                                <img className="h-8 w-auto sm:h-10" src={Logo} alt="" />
                            </Link>
                        </div>
                        <div className="mr-2 -my-2 md:hidden">
                            <div className="hover:cursor-pointer" onClick={dropDownNavbarHandler}>
                                <img id="userProfile" src={loggedInUser.image} className="w-8 h-8" alt="user profile" />
                            </div>
                        </div>
                        {
                            isLoggedIn && <>
                                <nav className="hidden md:flex space-x-10">
                                    <Link to="/movie" className="text-base font-medium text-white hover:text-netflix-red">Movies</Link>
                                    <a href="/" className="text-base font-medium text-white hover:text-netflix-red">Series</a>
                                </nav>
                            </>
                        }
                        {
                            isLoggedIn && <>
                                <div className="text-white gap-4 hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                                    <img src={SearchIcon} alt="search icon" />
                                    <span>{loggedInUser.username}</span>
                                    <img src={GiftBoxIcon} alt="gift" />
                                    <img src={NotificationBellIcon} alt="notifications" />
                                    <div className="hover:cursor-pointer" onClick={dropDownNavbarHandler}>
                                        <img id="userProfile" src={loggedInUser.image} className="w-8 h-8" alt="user profile" />
                                    </div>
                                </div>



                            </>
                        }
                    </div>
                </div>
                <div ref={refDropDown} className={`z-10 w-44 bg-netflix-dark border-t-2 border-netflix-blue rounded divide-y divide-gray-600 shadow block shadow-neutral-800 ${!showDropdown && 'hidden'}`} data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="bottom" style={{ position: 'absolute', inset: '0px auto auto auto', right: '350px', margin: '0px', transform: 'translate3d(327px, 70px, 0px)' }}>
                    <div className="py-3 px-4 text-sm text-white">
                        <div>{loggedInUser.username}</div>
                        <div className="font-medium truncate"></div>
                    </div>
                    {/* <ul className="py-1 text-sm text-white dark:text-white" aria-labelledby="dropdownInformationButton">
                        <li>
                            <Link to="/logout" className="block py-2 px-4 hover:bg-netflix-blue dark:hover:text-white">Earnings</Link>
                        </li>
                    </ul> */}
                    <div className="py-1">
                        <Link to="/logout" className="block py-2 px-4 text-sm text-white hover:bg-netflix-blue dark:text-gray-200 dark:hover:text-white">Log out</Link>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Navbar;