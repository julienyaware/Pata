import React from 'react';

function NavBar(props) {
    return (
        <div className='text-white flex justify-between items-center h-24 max-w-[1240px] px-4 mx-auto'>
            <h1 className='w-full text-3xl font-bold text-[#48ddae]'>NIPATE</h1>
            <ul className='flex'>
                <li className='p-5'>Services</li>
                <li className='p-5'>About</li>
                <li className='p-5'>Login</li>
                <li className='p-5'>Register</li>
            </ul>
        </div>
    );
}

export default NavBar;