import React from 'react';
import { categories } from './data/categories';
import { Link } from 'react-router-dom';

const Categories = () => {
   
    return (
        <div className="max-w-[1640px] m-auto px-20 py-12  bg-white h-screen w-screen">
      <h1 className="font-bold text-black text-4xl text-center">
        CATEGORIES
      </h1>
      {/* Categories */}
      <Link
       to="/providers"
                        >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
        {categories.map((item, index) => (
          <div
            key={index}
            className=" border border-[#1623CE]  hover:bg-white cursor-pointer duration-500 rounded-lg py-10  px-10 flex justify-between items-center"
          >
            <h2 className="font-bold sm:text-xl">{item.name}</h2>
            <img src={item.image} alt={item.name} className="w-20" />
          </div>
        ))}
      </div>
      </Link>
    </div>
    );
};

export default Categories;