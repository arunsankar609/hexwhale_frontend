import React from "react";
import Card from "../reusables/Cards";
import { trendingProduct } from "../constantdata/productData";
import image5 from "../images/image-7.jpg";
import { Element } from "react-scroll";
const Trending = () => {
  return (
    <div className="w-full">
       <Element name="shop">
      </Element>
      <div className="w-full flex justify-center items-center">
        <div className="flex flex-col mt-6 justify-center items-center text-center w-[80%]">
          <div>
            <h1 className="text-3xl font-bold">Trending Products</h1>
            <h1>These are the trending products available</h1>
          </div>
          <div className="flex flex-wrap mt-6 justify-center ">
            {trendingProduct?.map((item) => (
              <Card
                key={item.id}
                title={item.name}
                content="Description of Product 1."
                imageSrc={item.image}
                price={item.price}
                strikePrice={item.strikeprice}
                className="transition-transform transform hover:scale-105"
              />
            ))}
          </div>
          <div>
            <button className="hover:bg-gray-500 border w-32 hover:text-white border-black  text-black font-bold py-2 px-4 rounded">
              Load More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
