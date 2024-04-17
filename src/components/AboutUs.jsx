import React from 'react';
import plumber from '../assets/plumber.png'
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 '>
                <img className='mx-auto my-4 w-[70%] h-[100%]' src={plumber} alt="service man" />
                <div className='flex flex-col justify-center'>
                    <p className='text-[#1623CE] font-bold'>ABOUT NIPATE</p>
                    <h1 className='font-bold py-2 md:text-4xl sm:text-3xl my-4 text-2xl'>Where Service Providers Are Linked To Their Clientelle Easily.</h1>
                    <p> Welcome to our platform, where service providers effortlessly connect with their clientele! Our website serves as the ultimate hub for seamless networking between professionals and their valued customers. With our intuitive interface and robust features, finding the perfect service provider or reaching out to potential clients has never been easier. Join us today and experience the convenience of connecting with your target audience effortlessly
                    </p>
                    <Link
                        to="/signUp"
        
                    >
                        <button className='bg-black rounded-md font-medium w-[200px] my-6 mx-auto py-3 md:mx-0 text-[#1623CE]'>
                            Register
                        </button>
                    </Link>

                </div>
            </div>

        </div>
    );
};

export default AboutUs;