import React, { useContext } from 'react';
import { auth } from "../Firabase";
import { useState } from 'react';
import {signOut, signInWithEmailAndPassword,} from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const validateEmail = (str = "") => str.includes("@");

const Login = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notice, setNotice] = useState("");


  const validateEmailAndPassword = (e) => {
    e.preventDefault()
    if(email.trim() === ''){
      setNotice('Email Address is required')
      return;
    }
    if(password.length>100 && email.length > 50){
      setNotice('Username must be at most 50 characters and password at most 100 characters')
      return;
    }
    if(password.trim() === '') {
      setNotice('Password is required')
      return;
    }
    if (!validateEmail(email)) {
      setNotice("Invalid email");
      return;
    }
    if (password.length<6) {
      setNotice("Password should be at least 6 characters");
      return;
    }
    loginWithUsernameAndPassword(e)
  };

  const loginWithUsernameAndPassword = async (e) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user })
        navigate("./profilehomepage")
      })
      .catch((error) => {
        setNotice("You entered a wrong username or password.");
      });
  }


  const handleLogout = (event) => {
    event.preventDefault();
    signOut(auth)
      .then(() => {
        window.alert("Logout Success");
      })
      .catch((error) => {
        window.alert(error.message);
      });
  };


  return (
    <div className="text-white min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-4 text-5xl text-center tracking-tight font-bold dark:text-[#1623CE] ">
            Login
          </h2>
        </div>
        <form className="mt-8 space-y-6"
          onReset={(e) => handleLogout(e)}>
          {notice !== '' &&

            <div onClick={e => setNotice('')} class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">

              <span class="block sm:inline">{notice}</span>
              <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
              </span>
            </div>
          }
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                value={email} onChange={(e) => setEmail(e.target.value)}
                className="p-5 flex w-full rounded-md text-black appearance-none  relative   px-3  placeholder-gray-500 rounded-t-md bg-gray-50 border border-gray-300  text-4xl focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={password} onChange={(e) => setPassword(e.target.value)}
                className="p-5 my-4 flex w-full rounded-md text-black appearance-none  relative  px-3 text-4xl placeholder-gray-500 rounded-t-md bg-gray-100 border border-gray-300  focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              onClick={(e) => validateEmailAndPassword(e)}
              className=" text-black w-full flex justify-center py-3 px-4 border border-transparent   bg-[#1623CE] rounded-md font-medium "
            >
              Login
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <Link
                to="/signUp"
                className="text-[#1623CE]  hover:underline"
              >
                Don't have an account? Register
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;