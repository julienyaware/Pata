import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="text-white min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-4 text-5xl text-center tracking-tight font-bold dark:text-[#1623CE] ">
                        Login
                    </h2>
                </div>
                <form className="mt-8 space-y-6">
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="p-5 flex w-full rounded-md text-black appearance-none  relative   px-3  placeholder-gray-500 rounded-t-md bg-gray-50 border border-gray-300  text-4xl focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:z-10 sm:text-sm"
                                placeholder="Email address"
                            />
                        </div>
                        <div>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="p-5 my-4 flex w-full rounded-md text-black appearance-none  relative  px-3 text-4xl placeholder-gray-500 rounded-t-md bg-gray-100 border border-gray-300  focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:z-10 sm:text-sm"
                                placeholder="Password"
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
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