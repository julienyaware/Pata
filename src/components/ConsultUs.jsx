import React, { useState } from 'react';
import Chatbot from './Chatbot';

const ConsultUs = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleChatbot = () => {
      setIsOpen(!isOpen);
    };
    
    return (
        <div className='w-full px-4 py-16 text-white'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2'>
                    <h1 className='md:text-5xl sm:text-4xl text-xl my-4'>Want to save some money for small issues you can fix by yourself?</h1>
                    <p>Get instructions from our bot on how to do it yourself.</p>
                </div>
                <div className='my-4'>
                    <button className='bg-[#1623CE] rounded-md font-medium w-[200px] my-4 mx-auto py-3 text-black'
                        onClick={toggleChatbot}
                    > {isOpen ? 'Close Chatbot' : 'Open Chatbot'}</button>
                </div>
            </div>
            {isOpen && (
        <div className="fixed bottom-8 right-8 bg-white border border-gray-300 shadow-lg p-4 rounded-lg z-10">
          <Chatbot/>
        </div>
      )}

        </div>
    );
};
export default ConsultUs;