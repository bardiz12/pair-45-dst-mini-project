import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Logo from "../assets/logo.svg"
import { selectIsLoggedIn } from "../store/userStore";
import SearchIcon from '../assets/icons/Search.svg'
import NotificationBellIcon from '../assets/icons/NotificationBell.svg'
import GiftBoxIcon from '../assets/icons/GiftBox.svg'
import { Link, useNavigate } from 'react-router-dom'
import auth from "../authentication/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import userImage from "../data/userImage";
import Input from "./Input";

const Navbar = function () {
    const [loggedInUser] = useAuthState(auth);

    const [showSearchBar, setShowSearchBar] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [searchText, setSearchText] = useState('');

    const isLoggedIn = useSelector(selectIsLoggedIn);

    const refDropDown = useRef();
    const navigate = useNavigate();


    useEffect(() => {
        const handleClickOutside = (event) => {

            if (refDropDown.current && !refDropDown.current.contains(event.target)) {
                if (event.target.id !== 'userProfile') {
                    setShowDropdown(false);
                }
                if (event.target.id !== 'search-bar' && event.target.id !== 'search-bar-trigger') {
                    setShowSearchBar(false);
                }
            }
        };
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, [showDropdown, showSearchBar]);

    useEffect(() => {
        if (showSearchBar) {
            document.getElementById('search-bar').focus()
        }
    }, [showSearchBar])


    const dropDownNavbarHandler = (e) => {
        setShowDropdown(!showDropdown)
    }

    const handleSearch = () => {
        navigate({
            pathname: '/movie/search',
            search: `?q=${searchText}`,
        }, {
            replace: true
        });
        setSearchText("");
        setShowSearchBar(false);
    }

    return (
        <>
            <div className="relative bg-netflix-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <Link to={isLoggedIn ? '/movie' : '/'}>
                                <img className="h-8 w-auto sm:h-10" src={Logo} alt="" />
                            </Link>
                        </div>
                        <div className="mr-2 -my-2 md:hidden">
                            <div className="flex gap-4">
                                <button onClick={(e) => setShowSearchBar(!showSearchBar)}>
                                    <img id="search-bar-trigger" src={SearchIcon} alt="search icon" />
                                </button>
                                {
                                    isLoggedIn && (<div className="hover:cursor-pointer" onClick={dropDownNavbarHandler}>
                                        <img id="userProfile" src={userImage.getImage(loggedInUser.photoURL)} className="w-8 h-8" alt="user profile" />
                                    </div>)
                                }
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
                            <>
                                <div className="text-white gap-4 hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                                    <button onClick={(e) => setShowSearchBar(!showSearchBar)}>
                                        <img id="search-bar-trigger" src={SearchIcon} alt="search icon" />
                                    </button>
                                    {isLoggedIn && <>
                                        <span>{loggedInUser.displayName}</span>
                                        <img src={GiftBoxIcon} alt="gift" />
                                        <img src={NotificationBellIcon} alt="notifications" />
                                        <div className="hover:cursor-pointer" onClick={dropDownNavbarHandler}>
                                            <img id="userProfile" src={userImage.getImage(loggedInUser.photoURL)} className="w-8 h-8" alt="user profile" />
                                        </div>
                                    </>}
                                </div>



                            </>
                        }
                    </div>
                </div>

                {
                    showSearchBar && <div className={`z-10 w-screen flex justify-center`}>
                        <div className="w-[calc(100vw-8rem)]">
                            <Input
                                size="medium"
                                id="search-bar"
                                placeholder="Search movie title.."
                                onKeyPress={
                                    (e) => e.key === 'Enter' && handleSearch()
                                }
                                value={searchText}
                                onChange={
                                    (e) => setSearchText(e.target.value)
                                }
                            ></Input>
                        </div>
                    </div>
                }
                {
                    isLoggedIn && (<div ref={refDropDown} className={`z-10 w-44 bg-netflix-dark border-t-2 border-netflix-blue rounded divide-y divide-gray-600 shadow block shadow-neutral-800 ${!showDropdown && 'hidden'}`} data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="bottom" style={{ position: 'absolute', inset: '0px auto auto auto', right: '350px', margin: '0px', transform: 'translate3d(327px, 70px, 0px)' }}>
                        <div className="py-3 px-4 text-sm text-white">
                            <div>{loggedInUser.displayName}</div>
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
                    </div>)
                }

            </div>
        </>
    )
}

export default Navbar;