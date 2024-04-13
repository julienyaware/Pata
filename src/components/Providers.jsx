import React, { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../Firabase';
import Category from './Category';



const Providers = () => {
    const [providerPortfolios, setProviderPortfolios] = useState({})

    const getAllProviders = async () => {
        const allAvailableProviders = {};
        const querySnapshot = await getDocs(collection(db, "profile"));
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          allAvailableProviders[doc.id] = doc.data();
          console.log(doc.id, " => ", doc.data());
        });
        return allAvailableProviders
    }
    useEffect(() => {
        const getInfo = async () => {
            try {
                const getProvidersInfo = await getAllProviders();
                setProviderPortfolios(getProvidersInfo);
            } catch(error) {
                console.log(error)
                // handle any rejections/errors/etc
            }
        };
        getInfo(); // <-- fetch/compute coupeur value
    }, []);
    if (!providerPortfolios){
        console.log("wait"); // or loading indicator/etc
    }else{
        console.log(providerPortfolios);
    }
    return (
        <div className='w-full h-full py-[10 rem] px-4 bg-white'>
            
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'> 
            {Object.keys(providerPortfolios).map(item => (
                <Category providersInfo = {providerPortfolios[item]}/> 
      ))}
  </div>
        </div>
    );
};

export default Providers;