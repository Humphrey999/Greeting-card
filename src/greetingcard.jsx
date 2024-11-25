import React from 'react';

function GreetingCard({ image, title, message }) {
  return (
    <div className="border p-4 rounded-md shadow-lg bg-white text-gray-800 max-w-sm mx-auto">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-md" />
      <h2 className="text-xl font-semibold text-purple-700 mt-4">{title}</h2>
      <p className="mt-2">{message}</p>
    </div>
  );
}

export default GreetingCard;
