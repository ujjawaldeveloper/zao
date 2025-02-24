import React from 'react';

const ProductCard = () => {
  return (
    <div className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition-shadow">
      <div className="aspect-w-1 aspect-h-1 mb-4">
        <img
          src="https://placehold.co/300x300"
          alt="Product"
          className="object-cover rounded-lg transition-opacity duration-300 opacity-100"
          loading="lazy"
        />
      </div>
      <h3 className="font-medium text-lg mb-2">Product Name</h3>
      <div className="flex items-center mb-2">
        <span className="text-sm bg-green-500 text-white px-2 py-1 rounded">
          4.5 ★
        </span>
        <span className="text-sm text-gray-500 ml-2">(2,345)</span>
      </div>
      <div className="flex items-center">
        <span className="text-xl font-bold">₹1,499</span>
        <span className="text-sm text-gray-500 line-through ml-2">₹2,999</span>
        <span className="text-sm text-green-500 ml-2">50% off</span>
      </div>
    </div>
  );
};

export default ProductCard;