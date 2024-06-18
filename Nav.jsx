import React, { useState } from "react";
import profile from "../assets/profile.jpg"
import { CircleUserRound, LogIn, LogOut } from "lucide-react";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (

        <div className="flex justify-between align-baseline bg-purple-800 shadow-lg h-14">

            <div className="m-3 ms-5 text-white text-2xl">
                <h2 className="font-semisold">Marks Predictor </h2>
            </div>

            <div className="relative inline-block text-left">
                <div>
                    <img src={profile}
                        className="w-8 h-8 m-3 me-6 rounded-full"
                        aria-haspopup="false"
                        aria-expanded="true"
                        onClick={toggleDropdown}
                        alt="user photo" />
                </div>

                {isOpen && (
                    <div
                        className="absolute right-0 w-36 m-3 me-6 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    >
                        <div className="" role="none">
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            >
                                <div className="flex">
                                    <CircleUserRound />  <span className="ps-3">UserName</span>
                                </div>
                            </a>

                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            >
                                <div className="flex">
                                    <LogIn />  <span className="ps-3">LogIn</span>
                                </div>
                            </a>

                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            >
                                <div className="flex">
                                    <LogOut />  <span className="ps-3">LogOut</span>
                                </div>
                            </a>

                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NavBar

