import React from "react";

const BlogCard = ({ imageUrl, author, heading, date, description }) => {
  return (
    <div className="bg-white border border-gray-300 p-3 mx-1 rounded-lg shadow-lg">
      <img src={imageUrl} alt={heading} className="w-full mb-4 rounded" />
      <h2 className="text-xl font-bold mb-2">{heading}</h2>
      <h2 className="text-sm font-bold mb-2">
        By <span className="text-orange-600">{author}</span> /{date}
      </h2>
      <p className="text-gray-700 mb-4">{description}</p>
      <button className="hover:bg-gray-500 border w-32 hover:text-white border-black  text-black font-bold py-2 px-4 rounded">
        Read More
      </button>
    </div>
  );
};

export default BlogCard;
