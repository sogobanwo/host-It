import React from "react";
import { useNavigate } from 'react-router-dom';
import { ArrowCircleDown, ArrowCircleRight2, Microphone2, NotificationBing, ProfileCircle, SearchNormal, TriangleLogo, Video } from "iconsax-react";

const NavBar = ({ idPage }) => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };
    return (
        <>
            <div className="hidden my-3 mdl:flex justify-between sticky">
                <div className="flex items-center">
                    <div className="relative flex items-center bg-lightBlack ml-5 rounded-full w-80">
                        <input
                            type="text"
                            style={{ backgroundColor: "transparent" }}
                            className="flex-1 bg-transparent text-white rounded-full h-12 px-12 text-opacity-60 text-base font-normal leading-none"
                            placeholder="Search for channels"
                        />
                        <div className="absolute inset-y-0 left-2 flex items-center pl-3">
                            <SearchNormal
                                size="20"
                                className="text-primaryColor"
                            />
                        </div>
                    </div>
                    <div className="ml-6 rounded-full p-3 bg-lightBlack hover:bg-lightWhite">
                        <Microphone2 size="20" className="text-primaryColor" />
                    </div>
                </div>

                <div className="mr-10 flex items-center gap-6">
                    <div className="rounded-full p-3 bg-lightBlack hover:bg-lightWhite">
                        <Video size="24" className="text-primaryColor" />
                    </div>
                    <div className="rounded-full p-3 bg-lightBlack hover:bg-lightWhite">
                        <NotificationBing size="24" className="text-primaryColor" />
                    </div>
                    <div className="rounded-full">
                        <ProfileCircle size="48" className="text-primaryColor" />
                    </div>
                </div>
            </div>
            {!idPage && <div className="flex justify-between items-center px-8 py-4 w-screen mdl:hidden">
                <TriangleLogo size="48" className="text-primaryColor" />
                <div className="flex justify-between items-center gap-2">
                    <div className="p-2 bg-lightBlack rounded-full">
                        <SearchNormal size="20" className="text-primaryColor" />
                    </div>
                    <div className="p-2 bg-lightBlack rounded-full">
                        <NotificationBing size="32" className="text-primaryColor" />
                    </div>
                    <div className="p-2 bg-lightBlack rounded-full">
                        <ArrowCircleRight2 size="20" className="text-primaryColor"/>
                    </div>
                </div>
            </div>}
            {idPage &&
                <div className="absolute left-4 top-4 p-2 rounded-full bg-lightBlack mdl:hidden z-40" onClick={goBack}>
                    <ArrowCircleDown size="32" className="text-primaryColor" onClick={goBack} />
                </div>}
        </>
    );
};

export default NavBar;
