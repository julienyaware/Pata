import React, { useState } from 'react';
import AddReview from './AddReview';

const Category = ({ providersInfo }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);



  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };


  return (
    <div className='max-w-[1640px] m-auto md:h-64  sm:h-40 my-8 sm:min-h-screen sm:flex sm:flex-col sm:justify-between'>
     <div class="max-w-xs mx-auto"> 
  <div class="bg-white shadow-xl rounded-lg overflow-hidden">
    <div class="photo-wrapper p-4 flex justify-center">
      <img class="w-24 h-24 rounded-full" src={providersInfo.avatarImageUrl ? providersInfo.avatarImageUrl : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="Avatar" /> {/* Image size set for smaller screens */}
    </div>
    <div class="p-4">
      <h3 class="text-center text-lg text-black font-semibold mb-2">{providersInfo.firstName}</h3> {/* Font size adjusted for smaller screens */}
      <div class="text-center text-gray-600 text-sm mb-2"> {/* Font size adjusted for smaller screens */}
        <p>{providersInfo.occupation}</p>
      </div>
      <table class="w-full mb-4"> 
        <tbody>
          <tr>
            <td class="px-2 py-2 text-gray-800 font-semibold">Last Name</td>
            <td class="px-2 py-2">{providersInfo.lastName}</td>
          </tr>
          <tr>
            <td class="px-2 py-2 text-gray-800 font-semibold">State</td>
            <td class="px-2 py-2">{providersInfo.state}</td>
          </tr>
          <tr>
            <td class="px-2 py-2 text-gray-800 font-semibold">Hourly Rate</td>
            <td class="px-2 py-2">{providersInfo.hourlyRate}</td>
          </tr>
        </tbody>
      </table>
      <div class="text-center">
        <button onClick={handleOpenModal} class="bg-black text-white font-bold py-2 px-4 rounded-full hover:bg-gray-800 focus:outline-none focus:bg-gray-800"> {/* Button styling adjusted for smaller screens */}
          View More Info
        </button>
      </div>
    </div>
  </div>
</div>

      {isModalOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen px-4 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-800 opacity-75"></div>
          </div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div className="bg-white px-6 py-8 sm:p-8">
              <div className="flex items-center justify-center mb-6">
                <img className="w-32 h-32 rounded-full" src={providersInfo.avatarImageUrl ? providersInfo.avatarImageUrl : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="Profile" />
              </div>
              <div className="text-center">
                <h1 className="text-lg font-semibold text-black mb-2" id="modal-title">{providersInfo.firstName} {providersInfo.lastName}</h1>
                <div className="text-gray-600 text-sm mb-4">
                  <p>{providersInfo.occupation}</p>
                </div>
                <table className="w-full text-md mb-4">
                  <tbody>
                    <tr>
                      <td className="px-2 py-2 text-gray-800 font-semibold">State</td>
                      <td className="px-2 py-2">{providersInfo.state}</td>
                    </tr>
                    <tr>
                      <td className="px-2 py-2 text-gray-800 font-semibold">Hourly Rate</td>
                      <td className="px-2 py-2">{providersInfo.hourlyRate}</td>
                    </tr>
                    <tr>
                      <td className="px-2 py-2 text-gray-800 font-semibold">Education / Training</td>
                      <td className="px-2 py-2">{providersInfo.education}</td>
                    </tr>
                    <tr>
                      <td className="px-2 py-2 text-gray-800 font-semibold">Work Experience</td>
                      <td className="px-2 py-2">{providersInfo.yearsOfExperience}</td>
                    </tr>
                    <tr>
                      <td className="px-2 py-2 text-gray-800 font-semibold">Availability</td>
                      <td className="px-2 py-2">{providersInfo.availability}</td>
                    </tr>
                    <tr>
                      <td className="px-2 py-2 text-gray-800 font-semibold">Work Description</td>
                      <td className="px-2 py-2">{providersInfo.workDescription}</td>
                    </tr>
                    <tr>
                      <td className="px-2 py-2 text-gray-800 font-semibold">Phone Number</td>
                      <td className="px-2 py-2">{providersInfo.phoneNumber}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <AddReview providersInfo={providersInfo} />
            </div>
            <div className="bg-gray-100 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button onClick={handleCloseModal} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-black text-white text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
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