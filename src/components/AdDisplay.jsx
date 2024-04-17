import React from 'react';
import { ReactTyped } from 'react-typed';
import { Link } from 'react-router-dom';

const AdDisplay = () => {
    return (
        <div className='text-white'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='font-bold p-2 text-[#1623CE]'>GET GREAT SERVICES AT GREAT PRICES</p>
                <h1 className='font-bold md:py-6 md:text-7xl sm:text-6xl text-4xl '>Find your service provider</h1>
                <div className='flex items-center justify-center flex-col '>
                    <ReactTyped className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 py-4'
                        strings={['Get Fast, accessible clientelle and services']}
                        typeSpeed={120}
                        backSpeed={140}
                        loop
                    />
                </div>
                <p className='text-gray-400 md:text-2xl text-xl font-bold py-4'>Get service providers closest to you</p>
                <Link
                    to="/categories"
                >
                    <button className='bg-[#1623CE] rounded-md font-medium w-[200px] my-4 mx-auto py-3 text-black'>

                        Find Services
                    </button>
                </Link>

            </div>
        </div>
    );
};

export default AdDisplay;