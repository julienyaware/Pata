import React from 'react';
import plumber from '../assets/plumber.png';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div className='bg-white py-8 md:py-16 px-4'>
            <div className='max-w-[90%] mx-auto grid gap-8 md:grid-cols-2'>
                <img className='mx-auto w-full md:max-w-[70%] h-auto' src={plumber} alt="service man" />
                <div className='flex flex-col justify-center'>
                    <p className='text-[#1623CE] font-bold'>ABOUT NIPATE</p>
                    <h1 className='font-bold py-2 text-xl md:text-4xl'>Where Service Providers Are Linked To Their Clientelle Easily.</h1>
                    <p className='text-sm md:text-base'> Welcome to our platform, where service providers effortlessly connect with their clientele! Our website serves as the ultimate hub for seamless networking between professionals and their valued customers. With our intuitive interface and robust features, finding the perfect service provider or reaching out to potential clients has never been easier. Join us today and experience the convenience of connecting with your target audience effortlessly
                    </p>
                    <Link to="/signUp">
                        <button className='bg-black rounded-md font-medium w-full md:w-[200px] my-6 mx-auto md:mx-0 py-3 text-[#1623CE]'>
                            Register
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
