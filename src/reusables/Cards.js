import React from 'react';

const Card = ({ title, content, imageSrc, price, strikePrice }) => {
  return (
    <div className="bg-white shadow-md p-4 mb-4 rounded-lg text-center transition-transform transform hover:scale-105">
      <img className="w-32 h-32 object-cover mx-auto mb-2" src={imageSrc} alt={title} />
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <div className="flex items-center justify-center mt-4">
        <span className="text-green-500 font-bold">${price}</span>
        {strikePrice && (
          <span className="text-red-500 ml-2 line-through">${strikePrice}</span>
        )}
      </div>
    </div>
  );
};

export default Card;
