import React from 'react';
import {signOut, signInWithEmailAndPassword,} from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from '../Firabase';
import { useState } from 'react';


const DropDownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navigate = useNavigate()

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        window.alert("Logout Success");
        localStorage.clear();
        navigate("./../../login")
      })
      .catch((error) => {
        window.alert(error.message);
      });
  };

   const deleteUserAccount = async()=> {
        try {
            await auth.currentUser.delete();
            window.alert("Account has been deleted successfully")
            navigate("./../../signUp")
        } catch (error) {
            window.alert(error)
        }

      }
  const handleItemClick = (action) => {
    // Perform action based on the clicked item
    if (action === 'logout') {
      handleLogout()
    } else if (action === 'deleteAccount') {
      deleteUserAccount()
    }
    // Close the dropdown after performing the action
    setIsOpen(false);
  };

  return (
    <div className="relative rounded-md font-medium w-[200px] my-6 mx-auto py-3 ">
      <button className="bg-gray-800 text-white py-2 px-4 rounded" onClick={toggleDropdown}>
        Settings
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
          <div className="py-1">
            <button className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left" onClick={() => handleItemClick('logout')}>
              Logout
            </button>
            <button className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left" onClick={() => handleItemClick('deleteAccount')}>
              Delete Account
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDownMenu;