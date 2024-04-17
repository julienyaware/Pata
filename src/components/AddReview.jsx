import React from 'react';

const AddReview = () => {
    return (
        <form class="bg-white p-4 rounded-lg shadow-md">
            <h3 class="text-lg font-bold mb-2">Review your provider</h3>
            <div class="mb-4">
                <label class="block text-black font-bold mb-2" for="name">
                    Name (Optional)
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name" type="text" placeholder="Enter your name"/>
            </div>
            <div class="mb-4">
                <label class="block text-black font-bold mb-2" for="comment">
                    Review
                </label>
                <textarea
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="comment" rows="3" placeholder="Enter your comment"></textarea>
            </div>
            <button
                class="hover:bg-cyan-70 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline bg-black  text-[#1623CE]"
                type="submit">
                Submit
            </button>
        </form>
    );
};

export default AddReview;