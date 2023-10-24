import React from "react";
import { trendingProduct, saleOff } from "../constantdata/productData";
import banner2 from "../images/banner2.jpg";
import banner3 from "../images/banner3.jpg";
import Card from "../reusables/Cards";
import walkers from "../images/image-12.jpg";
import walkers1 from "../images/image-13.jpg";
import walkers2 from "../images/image-14.jpg";
import walkers3 from "../images/image-15.jpg";
import walkers4 from "../images/image-16.jpg";
import { Element } from "react-scroll";

const Saleoff = () => {
  return (
    <div className="w-full">
      <div className="w-full flex flex-wrap sm:flex-col vsm:flex-col md:flex-row">
        <div className="flex-1 p-2  relative">
          <img src={banner3} alt="bnnr" className="w-full h-auto" />
          <div className="absolute  top-1/2  transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h2 className="text-sm font-bold vsm:ml-40 vsm:mt-4 mb-2 text-orange-600">
              Products essentials
            </h2>
            <h2 className="text-sm font-bold vsm:ml-56 mb-2 text-black">
              Bottle neck with wooden cork
            </h2>
            <h2 className="text-sm font-thin vsm:ml-48 sm:ml-[217px] md:ml-[300px] desktop:ml-[390px] mb-2 text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do
              eiusmod tempor
            </h2>
            <button className=" vsm:ml-36 vsm:mb-2hover:bg-gray-500 border w-32 hover:text-white border-black  text-black font-bold  rounded">
              Buy Now
            </button>
          </div>
        </div>
        <div className="flex-1 p-2  relative">
          <img src={banner2} alt="bnnr" className="w-full h-auto" />
          <div className="absolute  top-1/2  transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h2 className="text-sm font-bold vsm:ml-40 vsm:mt-4 mb-2 text-orange-600">
              Products essentials
            </h2>
            <h2 className="text-sm font-bold vsm:ml-56 mb-2 text-black">
              Bottle neck with wooden cork
            </h2>
            <h2 className="text-sm font-thin vsm:ml-48 sm:ml-[217px] md:ml-[300px] desktop:ml-[390px] mb-2 text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do
              eiusmod tempor
            </h2>
            <button className=" vsm:ml-36 vsm:mb-2hover:bg-gray-500 border w-32 hover:text-white border-black  text-black font-bold  rounded">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full flex justify-center items-center">
          <div className="flex flex-col mt-6 justify-center items-center text-center w-[80%]">
            <div>
              <h1 className="text-3xl font-bold">Sale Off</h1>
              <h1>These are the sale off products available</h1>
            </div>
            <div className="flex flex-wrap mt-6 justify-center ">
              {saleOff?.map((item) => (
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
            <div className="flex flex-wrap mt-6 justify-center ">
              <img src={walkers} alt="zxc" />
              <img src={walkers1} alt="zxc" />
              <img src={walkers2} alt="zxc" />
              <img src={walkers3} alt="zxc" />
              <img src={walkers4} alt="zxc" />
            </div>
          </div>
        </div>
      </div>
      <Element name="blog">
         
         </Element> 
    </div>
  );
};

export default Saleoff;
