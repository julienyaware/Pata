import React from 'react';

const ProfileComments = () => {
    return (
        <div>
            <div class="bg-gray-100 p-6">
    <h2 class="text-lg font-bold mb-4">Comments</h2>
    <div class="flex flex-col space-y-4">
        <div class="bg-white p-4 rounded-lg shadow-md">
            <h3 class="text-lg font-bold">John Doe</h3>
            <p class="text-gray-700 text-sm mb-2">Posted on April 17, 2023</p>
            <p class="text-gray-700">This is a sample comment. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </div>
        <div class="bg-white p-4 rounded-lg shadow-md">
            <h3 class="text-lg font-bold">Jane Smith</h3>
            <p class="text-gray-700 text-sm mb-2">Posted on April 16, 2023</p>
            <p class="text-gray-700">I agree with John. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </div>
        <div class="bg-white p-4 rounded-lg shadow-md">
            <h3 class="text-lg font-bold">Bob Johnson</h3>
            <p class="text-gray-700 text-sm mb-2">Posted on April 15, 2023</p>
            <p class="text-gray-700">I have a different opinion. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </div>
        <form class="bg-white p-4 rounded-lg shadow-md">
            <h3 class="text-lg font-bold mb-2">Add a comment</h3>
            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="name">
                    Name
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name" type="text" placeholder="Enter your name"/>
            </div>
          
            <button
                class="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit">
                Submit
            </button>
        </form>
    </div>
</div>
        </div>
    );
};

export default ProfileComments;