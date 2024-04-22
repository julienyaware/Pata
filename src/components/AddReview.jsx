import React, { useState } from 'react';
import { addDoc, collection } from "firebase/firestore";
import { db } from '../Firabase';

const AddReview = ({ providersInfo }) => {
  const defaultState = {
    name: '',
    review: '',
    user_id: providersInfo.user_id
  };
  const [formState, setFormState] = useState(defaultState);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const submitComments = async (event, formState) => {
    event.preventDefault()
    try {
      await addDoc(collection(db, "comments"), {
        name: formState["name"],
        review: formState["review"],
        user_id: providersInfo.user_id
      })
      window.alert('Message Sent successfully')

    } catch (error) {
      window.alert(error.message);
    }
  }
  return (
    <form class="bg-white p-6 rounded-lg shadow-md">
  <h3 class="text-xl font-semibold mb-4">Leave a Message</h3>
  <div class="mb-6">
    <label class="block text-gray-800 font-semibold mb-2" for="name">Name (Optional)</label>
    <input
      name='name'
      value={formState.name}
      onChange={handleChange}
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="name"
      type="text"
      placeholder="Enter your name"
    />
  </div>
  <div class="mb-6">
    <label class="block text-gray-800 font-semibold mb-2" for="comment">Message</label>
    <textarea
      name='review'
      value={formState.review}
      onChange={handleChange}
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="comment"
      rows="4"
      placeholder="Enter your comment"
    ></textarea>
  </div>
  <button
    onClick={(e) => submitComments(e, formState)}
    class="hover:bg-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline bg-black text-white"
    type="submit"
  >
    Submit
  </button>
</form>

  );
};

export default AddReview;