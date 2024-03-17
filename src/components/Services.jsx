import React from 'react';
import plumber from '../assets/plumber.png'



const Services = () => {
    return (
        <div className='w-full py-[10 rem] px-4 bg-white'>
<div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 '>
    <div className='w-full shadow-xl rounded-lg flex flex-col p-4 my-4 hover:scale-105 duration-300'>
<img className='w-20 mx-auto mt-[3rem] bg-white' src={plumber} alt='services'/>
<h2 className='text-2xl font-bold text-center py-8'>Plumbing Services</h2>
<p className='text-center text-4xl font-bold'>Link with Provider</p>
<div className='text-center font-medium'>
    <p border-b py-2 mx-8 mt-8>Tap Leaking </p>
    <p border-b py-2 mx-8 >Toilet</p>
    <p border-b py-2 mx-8 >Plumbing</p>
</div>
<button className='bg-black rounded-md font-medium w-[200px] my-6 mx-auto py-3  text-[#1623CE]'>View Available Providers</button>
    </div>


    <div className='w-full shadow-xl rounded-lg flex flex-col p-4 bg-gray-100 md:my-0 my-8 hover:scale-105 duration-300'>
<img className='w-20 mx-auto mt-[3rem] bg-transparent' src={plumber} alt='services'/>
<h2 className='text-2xl font-bold text-center py-8'>Hair Dresser</h2>
<p className='text-center text-4xl font-bold'>Link with Provider</p>
<div className='text-center font-medium'>
    <p border-b py-2 mx-8 mt-8>Hair Cuts </p>
    <p border-b py-2 mx-8 >Lock Installation</p>
    <p border-b py-2 mx-8 >Braiding</p>
</div>
<button className='bg-[#1623CE] rounded-md font-medium w-[200px] my-6 mx-auto py-3  text-black'>View Available Providers</button>
    </div>

    <div className='w-full shadow-xl rounded-lg flex flex-col p-4 my-4 hover:scale-105 duration-300'>
<img className='w-20 mx-auto mt-[3rem] bg-white' src={plumber} alt='services'/>
<h2 className='text-2xl font-bold text-center py-8'>Maintenance</h2>
<p className='text-center text-4xl font-bold'>Link with Provider</p>
<div className='text-center font-medium'>
    <p border-b py-2 mx-8 mt-8>Tap Leaking </p>
    <p border-b py-2 mx-8 >Toilet</p>
    <p border-b py-2 mx-8 >Plumbing</p>
</div>
<button className='bg-black rounded-md font-medium w-[200px] my-6 mx-auto py-3  text-[#1623CE]'>View Available Providers</button>
    </div>

</div>
<div className='flex mx-auto justify-center'>
<button className= 'justify-center bg-black rounded-md font-medium w-[200px] my-6 mx-auto py-3  text-[#1623CE]' >Browse More Services...</button>
</div>
        </div>
    );
};

export default Services;