import React, { useState } from 'react';
import AddReview from './AddReview';

const Category = ({providersInfo}) => {
const [isModalOpen, setIsModalOpen] = useState(false);


  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

    return (
        <div className='h-64 my-8'>
        <div class="max-w-xs ">
            <div class="bg-white shadow-xl rounded-lg py-3">
                <div class="photo-wrapper p-2">
                    <img class="w-32 h-32 rounded-full mx-auto" src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" alt="John Doe"/>
                </div>
                <div class="p-2">
                    <h3 class="text-center text-xl text-black font-bold leading-8">{providersInfo.firstName}</h3>
                    <div class="text-center text-black text-xs font-bold">
                        <p>{providersInfo.occupation}</p>
                    </div>
                    <table class="text-md my-3">
                        <tbody><tr>
                            <td class="px-2 py-2 text-black font-bold">Last Name</td>
                            <td class="px-2 py-2">{providersInfo.lastName}</td>
                        </tr>
                        <tr>
                            <td class="px-2 py-2 text-black font-bold">State</td>
                            <td class="px-2 py-2">{providersInfo.state}</td>
                        </tr>
                        <tr>
                            <td class="px-2 py-2 text-black font-bold">Hourly Rate</td>
                            <td class="px-2 py-2">{providersInfo.hourlyRate}</td>
                        </tr>
                    </tbody></table>
        
                    <div class="text-center my-3">
                    <button onClick={handleOpenModal} className=" bg-black  text-[#1623CE] font-bold py-2 px-4 rounded">
        View More Info
      </button>
                    </div>
                </div>
            </div>
        </div>
        {isModalOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75">
              </div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="w-32 h-32 rounded-full mx-auto">
                    {/* Icon */}
                    <img class="w-32 h-32 rounded-full mx-auto" src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" alt="prof pic"/>

                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h1 className="text-lg leading-6 font-medium text-black" id="modal-title">
                    {providersInfo.firstName} {providersInfo.lastName}
                    </h1>
                    <div className="mt-2">
                    <table class="text-md my-3">
                    <tbody>
                      <tr>
                            <td class="px-2 py-2 text-black font-bold">Occupation</td>
                            <td class="px-2 py-2">{providersInfo.occupation}</td>
                        </tr>
                        <tr>
                            <td class="px-2 py-2 text-black font-bold">State</td>
                            <td class="px-2 py-2">{providersInfo.state}</td>
                        </tr>
                        <tr>
                            <td class="px-2 py-2 text-black font-bold">Hourly Rate</td>
                            <td class="px-2 py-2">{providersInfo.hourlyRate}</td>
                        </tr>
                        <tr>
                            <td class="px-2 py-2 text-black font-bold">Education / Training</td>
                            <td class="px-2 py-2">{providersInfo.education}</td>
                        </tr>
                        <tr>
                            <td class="px-2 py-2 text-black font-bold">Work Experience</td>
                            <td class="px-2 py-2">{providersInfo.yearsOfExperience}</td>
                        </tr>
                        <tr>
                            <td class="px-2 py-2 text-black font-bold">Availability</td>
                            <td class="px-2 py-2">{providersInfo.availability}</td>
                        </tr>
                        <tr>
                            <td class="px-2 py-2 text-black font-bold">Work description</td>
                            <td class="px-2 py-2">{providersInfo.workDescription}</td>
                        </tr>
                        <tr>
                            <td class="px-2 py-2 text-black font-bold">Phone Number</td>
                            <td class="px-2 py-2">{providersInfo.phoneNumber}</td>
                        </tr>
                    </tbody></table>
                    </div>
                  </div>
                </div>
              </div>
              <AddReview/>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button onClick={handleCloseModal} type="button" className=" w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-black  text-[#1623CE] text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
        </div>
    );
};

export default Category;