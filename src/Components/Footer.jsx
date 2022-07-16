import React from "react";

const Footer = () => {
    return (

        <footer className="p-4 bg-netflix-dark sm:p-6 text-white">
            <div className="md:flex md:justify-center">
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                        <ul className="text-gray-400 dark:text-gray-400 flex flex-col gap-4">
                            <li>
                                <a href="/" className="hover:underline">Audio & Subtitles</a>
                            </li>
                            <li>
                                <a href="/" className="hover:underline">Media Center</a>
                            </li>
                            <li>
                                <a href="/" className="hover:underline">Security</a>
                            </li>
                            <li>
                                <a href="/about" className="hover:underline">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="text-gray-400 dark:text-gray-400">
                            <li className="mb-4">
                                <a href="https://github.com/bardiz12" className="hover:underline ">Github</a>
                            </li>
                            <li>
                                <a href="https://bardiz.my.id" className="hover:underline">Website</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="text-gray-400 dark:text-gray-400">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-300 sm:text-center dark:text-gray-400">© {(new Date()).getFullYear()} <a href="/" className="hover:underline">Movies</a>. All Rights Reserved.
                    </span>
            
                </div>
        </footer>

    )
}

export default Footer