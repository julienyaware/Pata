import React from 'react';
import { FaInstagramSquare,FaGithubSquare,FaTwitterSquare,FaFacebookSquare } from "react-icons/fa";


const Footer = () => {
    return (
        <div className='max-w-[1240px] mx-auto lg:grid-cols-3 gap-8 text-gray-300 py-16 grid'>
            <div>
                       <h1 className='w-full text-3xl font-bold text-[#1623CE]'>NIPATE</h1>
                       <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, cumque porro cupiditate tenetur architecto odio illo.</p>
                       </div>
                       <div className='md:w-[75] flex my-6 justify-between'>
                        <FaInstagramSquare size={30}/>
                        <FaGithubSquare size={30}/>
                        <FaTwitterSquare size={30}/>
                        <FaFacebookSquare size={30}/>
                       </div>
                     
        </div>
    );
};

export default Footer;