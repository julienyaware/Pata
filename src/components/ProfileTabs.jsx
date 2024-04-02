import React from 'react';
import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { states } from './data/states';
import { education } from './data/education';
import { availbility } from './data/availability';

const ProfileTabs = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        gender: '',
        state: '',
        education: '',
        yearsOfExperience: '',
        hourlyRate: '',
        availability: '',
        phoneNumber: '',
        occupation: '',
        workDescription: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    const redoStep = () => {
        setStep(1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="relative min-h-screen flex" >
            <div className="container max-w-screen-xl mx-auto my-auto relative flex flex-col w-4/5">
                <div className="text-3xl font-BG  whitespace-pre-line text-center tracking-tighter text-black">
                    Service Provider Information
                </div>
                <form onSubmit={handleSubmit} className="mt-12 md:w-4/5 mx-auto rounded-3xl" style={{ backgroundColor: '#ebe9d8' }}>
                    {step === 1 && (
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="md:w-3/5 mx-auto py-12">
                            <div className="text-base font-light text-center  ">
                                Step 1/3
                            </div>
                            <div className="mt-4 w-full h-2" style={{ backgroundColor: '#e0cfc8' }}>
                                <div className="h-full bg-black rounded-3xl w-1/3"></div>
                            </div>
                            <div className="mt-12 text-3xl  text-center">
                                Tell us about yourself
                            </div>

                            <div>
                                <input
                                required 
                                    type="text"
                                    placeholder="First Name"
                                    name="firstName" 
                                    className="mt-4 w-full border border-gray-300 rounded p-2 focus:outline-none"
                                    style={{ backgroundColor: '#e0cfc8' }}
                                    value={formData.firstName}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <input
                                required 
                                    type="text"
                                    placeholder="Last Name"
                                    name="lastName" 
                                    className="mt-4 w-full border border-gray-300 rounded p-2 focus:outline-none"
                                    style={{ backgroundColor: '#e0cfc8' }}
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                            </div>


                         
                            <div>
                                <input
                                required 
                                    type="number"
                                    placeholder="Phone Number"
                                    name="phoneNumber" 
                                    className="mt-4 w-full border border-gray-300 rounded p-2 focus:outline-none"
                                    style={{ backgroundColor: '#e0cfc8' }}
                                    value={formData.phoneNumber} 
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <select 
                                required 
                                placeholder= "state"
                                name='state'
                                className="mt-4 w-full border border-gray-300 rounded p-2 focus:outline-none"
                                onChange={handleChange}
                                style={{ backgroundColor: '#e0cfc8' }}
                                value={formData.state} 
                                >
                                    {states.map((option, index) => {
                                        return (
                                            <option key={index}>
                                                {option}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>

                
                            <div>
                                <input
                                required 
                                    type="text"
                                    placeholder="Occupation"
                                    name="occupation" 
                                    className="mt-4 w-full border border-gray-300 rounded p-2 focus:outline-none"
                                    style={{ backgroundColor: '#e0cfc8' }}
                                    value={formData.occupation}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex justify-end">
                                <button type="button" onClick={nextStep} className="mt-4 bg-black text-white font-bold py-2 px-4 rounded">
                                    Next
                                </button>
                            </div>
                        </motion.div>
                    )}
                    {step === 2 && (
                        <motion.div
                            key={step} 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="md:w-3/5 mx-auto py-12">
                            <div className="text-base font-light text-center  ">
                                Step 2/3
                            </div>
                            <div className="mt-4 w-full h-2" style={{ backgroundColor: '#e0cfc8' }}>
                                <div className="h-full bg-black rounded-3xl w-2/3"></div>
                            </div>
                            <div className="mt-12 text-3xl  text-center">
                                Let’s talk Qualifications. Any training/certifications or diplomas?
                            </div>
                            <div>
                                <select 
                                required 
                                placeholder ="Education"
                                name='education'
                                className="mt-4 w-full border border-gray-300 rounded p-2 focus:outline-none"
                                onChange={handleChange}
                                style={{ backgroundColor: '#e0cfc8' }}
                                value={formData.education}
                                >
                                    {education.map((option, index) => {
                                        return (
                                            <option key={index}>
                                                {option}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>

                             {/* Number input field */}
                             <div>
                                <input
                                required
                                    type="number"
                                    placeholder="Years Of experience"
                                    name="yearsOfExperience"
                                    className="mt-4 w-full border border-gray-300 rounded p-2 focus:outline-none"
                                    style={{ backgroundColor: '#e0cfc8' }}
                                    value={formData.yearsOfExperience}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                

                            </div>
                            <div className="flex justify-center mt-12">

                                <button type="button" onClick={prevStep} className=" mr-4 bg-black text-white font-bold py-2 px-4 rounded">
                                    Previous
                                </button>
                                <button type="button" onClick={nextStep} className=" bg-black text-white font-bold py-2 px-4 rounded">
                                    Next
                                </button>
                            </div>
                        </motion.div>
                    )}
                    {step === 3 && (
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="md:w-3/5 mx-auto py-12">
                            <div className="text-base font-light text-center  ">
                                Step 3/3
                            </div>
                            <div className="mt-4 w-full h-2" style={{ backgroundColor: '#e0cfc8' }}>
                                <div className="h-full bg-black rounded-3xl w-3/3"></div>
                            </div>
                            <div className="mt-12 text-3xl  text-center">
                                Give us the deets!
                            </div>
                            <div>
                                <input
                                required
                                    type="text"
                                    placeholder="Hourly Rate"
                                    name="hourlyRate" 
                                    className="mt-4 w-full border border-gray-300 rounded p-2 focus:outline-none"
                                    style={{ backgroundColor: '#e0cfc8' }}
                                    value={formData.hourlyRate} 
                                    onChange={handleChange}
                                />
                            </div>

                            <select 
                            required
                                className="mt-4 w-full border border-gray-300 rounded p-2 focus:outline-none"
                                onChange={handleChange}
                                name='availability'
                                placeholder ="Availability"
                                style={{ backgroundColor: '#e0cfc8' }}
                                value={formData.availability} // 
                                >
                                    {availbility.map((option, index) => {
                                        return (
                                            <option key={index}>
                                                {option}
                                            </option>
                                        );
                                    })}
                                </select>

                            <div>
                                <textarea
                                    type="text"
                                    placeholder="Anything else would like your clients to know"
                                    name="workDescription" 
                                    className="mt-4 border border-gray-400 w-full rounded-md px-4 py-3 focus:outline-none "
                                    rows={8} 
                                    style={{ backgroundColor: '#e0cfc8' }}
                                    value={formData.workDescription} 
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex justify-center mt-12">

                                <button type="button" onClick={prevStep} className=" mr-4 bg-black text-white font-bold py-2 px-4 rounded">
                                    Previous
                                </button>
                                <button type="button" onClick={nextStep} className=" bg-black text-white font-bold py-2 px-4 rounded">
                                    Submit
                                </button>
                            </div>
                        </motion.div>
                    )}
                    {step === 4 && (
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="md:w-3/5 mx-auto py-12">
                            <div className="mt-12 text-base  text-center">
                                Your submission has been received! We will publish your profile once you have been verified.
                            </div>
                            <div>
                                <div className="flex justify-center mt-12">
                                    <button type="button" onClick={redoStep} className=" bg-black text-white font-bold py-2 px-4 rounded">
                                        Edit Details
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default ProfileTabs;