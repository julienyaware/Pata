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
            <p class="text-gray-700">John did an amazing job my tap is no longer leaking.
            </p>
        </div>
        <div class="bg-white p-4 rounded-lg shadow-md">
            <h3 class="text-lg font-bold">Jane Smith</h3>
            <p class="text-gray-700 text-sm mb-2">Posted on April 16, 2023</p>
            <p class="text-gray-700">John is very professional, he was on time and he fixed all my plumbing issues. Would definitely recommend!.
            </p>
        </div>
        <div class="bg-white p-4 rounded-lg shadow-md">
            <h3 class="text-lg font-bold">Bob Johnson</h3>
            <p class="text-gray-700 text-sm mb-2">Posted on April 15, 2023</p>
            <p class="text-gray-700">John was a great guy to work with him. Call him for any plumbing issues .
            </p>
        </div>
       
    </div>
</div>
        </div>
    );
};

export default ProfileComments;