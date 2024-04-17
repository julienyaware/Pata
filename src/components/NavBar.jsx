import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import DropDownMenu from './DropDownMenu';


const NavBar = (props) => {
    const [navStatus, setNavStatus] = useState(false);

    const handleNavigation = () => {
        setNavStatus(!navStatus)
    }

    return (
        <div className='text-white flex justify-between items-center h-24 max-w-[1240px] px-4 mx-auto'>
            <h1 className='w-full text-3xl font-bold text-[#1623CE]'>NIPATE</h1>
            <ul className='hidden md:flex'>
            <li className='p-5'><Link to="/">Home</Link></li>
                <li className='p-5'><Link to="/aboutUS">About</Link></li>
                <li className='p-5'><Link to="/services">Services</Link></li>
                <li className='p-5'><Link to="/login">Login</Link></li>
                <li className='p-5'><Link to="/signUp">Register</Link></li>
            </ul>
            <div onClick={handleNavigation} className='block md:hidden'>
                {navStatus ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
            </div>
            <div className={navStatus ? 'fixed top-0 left-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300]' : 'fixed left-[-100%]'}>
                <h1 className='w-full text-3xl font-bold text-[#1623CE]'>NIPATE</h1>
                <ul className='pt-4 uppercase'>
                    <li className='p-5  border-gray-600 border-b'>About</li>
                    <li className='p-5  border-gray-600 border-b'>Services</li>
                    <li className='p-5  border-gray-600 border-b'>Login</li>
                    <li className='p-5'>Register</li>
                    <li><DropDownMenu/></li>
                </ul>
                <DropDownMenu/>
            </div>
        </div>
    );
}

export default NavBar;