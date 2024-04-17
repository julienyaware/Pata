import React, { useState } from 'react';
import { deleteDoc, doc, getDoc, setDoc, addDoc,collection } from "firebase/firestore";
import { db } from '../Firabase';

const AddReview = ({providersInfo}) => {
    const defaultState = {
        name: '',
        review: '',
        user_id:providersInfo.user_id
      };
      const [formState, setFormState] = useState(defaultState);
      console.log(providersInfo)
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState((prevState) => ({ ...prevState, [name]: value }));
    };

      const submitComments = async (event,formState) => {
        event.preventDefault()
        try {
            console.log('providersInfo.user_id',providersInfo.user_id)
          await addDoc(collection(db, "comments"),{
            name: formState["name"],
            review: formState["review"],
            user_id:providersInfo.user_id
          })
          window.alert('Comment Submitted successfully')
    
        } catch (error) {
          window.alert(error.message);
        }
      }
    return (
        <form class="bg-white p-4 rounded-lg shadow-md">
            <h3 class="text-lg font-bold mb-2">Review your provider</h3>
            <div class="mb-4">
                <label class="block text-black font-bold mb-2" for="name">
                    Name (Optional)
                </label>
                <input
                name='name'
                value={formState.name}
                onChange={handleChange}
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name" type="text" placeholder="Enter your name"/>
            </div>
            <div class="mb-4">
                <label class="block text-black font-bold mb-2" for="comment">
                    Review
                </label>
                <textarea
                name='review'
                value={formState.review}
                onChange={handleChange}
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="comment" rows="3" placeholder="Enter your comment"></textarea>
            </div>
            <button
            onClick={(e) => submitComments(e, formState)}
                class="hover:bg-cyan-70 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline bg-black  text-[#1623CE]"
                type="submit">
                Submit
            </button>
        </form>
    );
};

export default AddReview;