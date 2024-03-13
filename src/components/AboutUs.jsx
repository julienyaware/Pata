import React from 'react';
import plumber from '../assets/plumber.png'

const AboutUs = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 '>
             <img className='w-[70%] h-[100%]' src={plumber} alt="service man"/>
             <div>
                <h1>NIPATE: Where Service Providers are linked to their clientelle easily.</h1>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic velit animi corrupti nihil error aliquid odit nostrum quod laborum ut. Cupiditate dolores modi placeat illo qui possimus facere in eos?
            </p>
             </div>
            </div>
            
        </div>
    );
};

export default AboutUs;