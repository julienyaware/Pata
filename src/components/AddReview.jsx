import React from 'react';

const AddReview = () => {
    return (
        <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="comment">
            Comment
        </label>
        <textarea
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="comment" rows="3" placeholder="Enter your comment"></textarea>
    </div>
    );
};

export default AddReview;