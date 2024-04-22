import React from 'react';
import { categories } from './data/categories';
import { Link } from 'react-router-dom';

const Categories = () => {

  return (
    <div className="max-w-[1640px] m-auto px-20 py-12  bg-white h-screen w-screen">
  <div className="px-4 py-6 sm:px-6 md:px-8 lg:px-10 xl:px-12">
    <h1 className="font-bold text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-6">
      CATEGORIES
    </h1>
    {/* Categories */}
    <Link to="/providers">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 hover:bg-white hover:shadow-md cursor-pointer duration-500 rounded-lg py-4 px-2 sm:px-4 flex flex-col justify-between items-center"
          >
            <h2 className="font-bold text-lg sm:text-xl mb-2">{item.name}</h2>
            <img src={item.image} alt={item.name} className="w-16 sm:w-20" />
          </div>
        ))}
      </div>
    </Link>
  </div>
</div>

  );
};

export default Categories;