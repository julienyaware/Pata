import React from 'react';
import { FaInstagramSquare, FaGithubSquare, FaTwitterSquare, FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='max-w-[90%] mx-auto text-gray-300 py-8 grid gap-8 md:grid-cols-3 md:gap-16'>
            <div>
                <h1 className='text-2xl md:text-3xl font-bold text-[#1623CE]'>NIPATE</h1>
                <p className='py-4 text-sm md:text-base'>With our intuitive interface and robust features, finding the perfect service provider or reaching out to potential clients has never been easier. Join us today and experience the convenience of connecting with your target audience effortlessly</p>
            </div>
            <div className='flex justify-center my-6 space-x-4'>
                <FaInstagramSquare size={30} />
                <FaGithubSquare size={30} />
                <FaTwitterSquare size={30} />
                <FaFacebookSquare size={30} />
            </div>
        </div>
    );
};

export default Footer;
