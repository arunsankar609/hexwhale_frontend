import React from "react";
import { Link, Element } from 'react-scroll';
import { blogData, saleOff } from "../constantdata/productData";
import BlogCard from "../reusables/Blogcard";

const Blogpost = () => {
  return (
    
    <div className="w-full">
       
      <div className="w-full flex justify-center items-center">
        <div className="flex flex-col mt-6 justify-center items-center text-center w-[100%]">
          <div>
        
        <h1 className="text-3xl font-bold">Our Blog Posts</h1>
            <h1>Feel free to go through our recent blog posts</h1>
          </div>
          <div className="flex flex-wrap mt-6 justify-center ">
            {blogData?.map((item) => (
              <BlogCard
                key={item.id}
                imageUrl={item.blogImage}
                heading={item.heading}
                date={item.date}
                author={item.author}
                description="Lorem ipsum dolor sit amet"
                className="transition-transform transform hover:scale-105"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-6 justify-center items-center text-center w-[100%]">
        <div>
          <h1 className="text-3xl font-semibold">Get Discount info</h1>
          <h1>
            Subscribe to the hexstock mailing list for updates of new
            arrivals,updates and discounts
          </h1>
        </div>
        <div className="flex flex-wrap mt-6 justify-center w-full">
          <div className="text-center w-full">
            <h1 className="mb-4">Subscribe to our newsletter</h1>
            <div className="border-b border-black w-[50%] mx-auto my-4"></div>
            <button className="hover:bg-gray-500 border w-32 hover:text-white border-black text-black font-bold py-2 px-4 rounded">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogpost;
