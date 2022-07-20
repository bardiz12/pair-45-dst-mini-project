import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import userImage from "../../data/userImage";
import { selectImageChoosen } from "../../store/userStore";

const AuthTemplatePage = () => {
    const imageChoosen = useSelector(selectImageChoosen);

    return (
        <div className="bg-black">
            <div className="md:flex w-full h-screen">
                <div className="w-full md:w-1/2" style={{
                    background: `url(${userImage.getImage(imageChoosen)}) center center / cover no-repeat`,
                }}>
                    <div className="flex w-full h-full  justify-end opacity-100">
                        <div className="w-32 h-full">
                            <div className="bg-gradient-to-r from-transparent via-black to-black h-full ">&nbsp;</div>
                        </div>
                    </div>
                    <div className="hidden md:block fixed h-full top-0 right-0 left-0 bg-netflix-dark opacity-40" style={{ width: "calc(50% - 5rem)" }}>
                        &nbsp;
                    </div>
                </div>
                <div className="w-full md:w-1/2 shadow-2xl  overflow-y-scroll">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default AuthTemplatePage