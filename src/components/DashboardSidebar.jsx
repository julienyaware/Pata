import React, { useState } from "react";
import { ImProfile } from "react-icons/im";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { FaImages } from "react-icons/fa";
import { FaRegComments } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from "react-icons/ai";



const DashboardSidebar = () => {
    const [nav, setNav] = useState(false);


    const menuItems = [
        { icon: <ImProfile size={25} className="mr-4" />, text: "Profile" },
        { icon: <MdOutlineForwardToInbox size={25} className="mr-4" />, text: "Inbox" },
        { icon: <FaImages size={25} className="mr-4" />, text: "Images" },
        { icon: <FaRegComments size={25} className="mr-4" />, text: "Comments" },
    ];
    return (
        <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4 shadow-sm">
            {/* Left side */}
            <div className="flex items-center">
                <div onClick={() => setNav(!nav)} className="cursor-pointer">
                    <AiOutlineMenu size={30} />
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
                    Set up <span className="font-bold">Profile</span>
                </h1>
                <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
                    <p className="bg-black text-white rounded-full p-2">Service</p>
                    <p className="p-2">Provider</p>
                </div>
            </div>

           
            {/* Settings button */}
            <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full border border-black px-5 ">
                <IoSettingsOutline size={20} className="mr-2" /> Settings
            </button>

            {/* Mobile Menu */}
            {/* Overlay */}
            {nav ? (
                <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
            ) : (
                ""
            )}

            {/* Side drawer menu */}
            <div
                className={
                    nav
                        ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
                        : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
                }
            >
                <AiOutlineClose
                    onClick={() => setNav(!nav)}
                    size={30}
                    className="absolute right-4 top-4 cursor-pointer"
                />
                <h2 className="text-2xl p-4">
                    Nipate <span className="font-bold">Profile</span>
                </h2>
                <nav>
                    <ul className="flex flex-col p-4 text-gray-800">
                        {menuItems.map(({ icon, text }, index) => {
                            return (
                                <div key={index} className=" py-4">
                                    <li className="text-xl flex cursor-pointer  w-[50%] rounded-full mx-auto p-2 hover:text-white hover:bg-black">
                                    {icon} {text}
                                        
                                    </li>
                                </div>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default DashboardSidebar;