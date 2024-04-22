import React, { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../Firabase';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';

const ProfileComments = () => {
    const [providerReviews, setProviderReviews] = useState({})

    const { currentUser } = useContext(AuthContext)
    console.log('currentuser', currentUser.uid)
    const getAllReviews = async () => {
        const allAvailableReviews = {};
        const querySnapshot = await getDocs(collection(db, "comments"));
        querySnapshot.forEach((doc) => {
            allAvailableReviews[doc.id] = doc.data();
            console.log(doc.id, " => ", doc.data());
        });
        console.log('availablereviews', allAvailableReviews)
        return allAvailableReviews
    }
    useEffect(() => {
        const getInfo = async () => {
            try {
                const getReviewsInfo = await getAllReviews();
                setProviderReviews(getReviewsInfo);
            } catch (error) {
                console.log(error)
                // handle any rejections/errors/etc
            }
        };
        getInfo(); // <-- fetch/compute coupeur value
    }, []);
    if (!providerReviews) {
        window.alert('Loading');
    } else {
        console.log(providerReviews);
    }
    return (
        <div className='min-h-screen w-screen'>
    <div className='min-h-screen'>
    <div className="bg-gray-100 p-3 md:p-6">
        <h2 className="text-lg font-bold mb-3 md:mb-4">Comments</h2>

        <div className="flex flex-col space-y-3 md:space-y-4">
            {Object.keys(providerReviews)
                .filter(item => providerReviews[item].user_id === currentUser.uid)
                .map(item => (
                    <div className="bg-white p-3 md:p-4 rounded-lg shadow-md" key={item}>
                        <h3 className="text-lg font-bold">{providerReviews[item].name}</h3>
                        <p className="text-gray-700 text-sm mb-1 md:mb-2">Posted on April 2024</p>
                        <p className="text-gray-700">{providerReviews[item].review}</p>
                    </div>
                ))}
        </div>
    </div>
</div>

</div>

    );
};

export default ProfileComments;