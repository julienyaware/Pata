import React from 'react';
import { ReactTyped  } from 'react-typed';

const AdDisplay = () => {
    return (
        <div className='text-white'>
           <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='font-bold p-2 text-[#48ddae]'>GET GREAT SERVICES AT GREAT PRICES</p>
            <h1 className='font-bold md:py-6 md:text-7xl sm:text-6xl text-4xl '>Find your service provider</h1>
            <div className='flex items-center justify-center flex-col '>
            <ReactTyped className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['Get Fast, accessible clientelle and services']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
            </div>
            
            </div> 
        </div>
    );
};

export default AdDisplay;