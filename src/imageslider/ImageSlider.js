import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../images/banner1.jpg";
import banner2 from "../images/banner2.jpg";
import banner3 from "../images/banner3.jpg";
import banner4 from "../images/banner4.jpg";
import image6 from "../images/image-6.jpg";
import image5 from "../images/image-7.jpg";
import image8 from "../images/image-8.jpg";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 200000,
  };

  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      {" "}
      {/* Set a fixed width */}
      <Slider {...settings} className="">
        <div className="relative">
          <img src={banner1} alt="ii 1" style={{ width: "100%" }} />{" "}
          {/* Set the image width to 100% */}
          <div className="absolute  sm:top-4 vsm:top-1 md:mt-36   md:left-20    text-center text-white">
            <h2 className="md:text-2xl vsm:text-sm font-semibold text-black mb-2">
              Think Different & <br /> Do it otherwise
            </h2>
            <p className="mb-4 md:text-2xl vsm:text-sm font-semibold text-black">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
              sed do eiusmod tempor
            </p>
            <button className="hover:bg-gray-500 border hover:text-white border-black  text-black font-bold py-2 px-4 rounded">
              Discover Now
            </button>
          </div>
        </div>
        <div>
          <img src={banner2} alt="rr 2" style={{ width: "100%" }} />
        </div>
        <div>
          <img src={banner3} alt="ff 3" style={{ width: "100%" }} />
        </div>
        <div>
          <img src={banner4} alt="tt 3" style={{ width: "100%" }} />
        </div>
        {/* Add more images as needed */}
      </Slider>
      <div className="flex justify-center flex-col smd:flex-row  bg-[#f5f5f5] w-full">
        <div className="relative">
          <div className="border-8 border-white transition-transform transform hover:scale-110 relative">
            <img src={image6} alt="zxc" />
            <div className="absolute top-0 left-2 mt-10 p-4 inset-0 flex flex-col  text-white">
              <h2 className="text-xl vsm:text-sm font-semibold text-black mb-2">sunflower clock <br/> quartz hands</h2>
              <button className="hover:bg-gray-500 border w-32 hover:text-white border-black  text-black font-bold py-2 px-4 rounded">
                Discover
              </button>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="border-8 border-white transition-transform transform hover:scale-110 relative">
            <img src={image5} alt="zxc" />
            <div className="absolute top-0 left-2 mt-10 p-4 inset-0 flex flex-col  text-white">
              <h2 className="text-xl vsm:text-sm font-semibold text-black mb-2">chair kimi no isu <br/> project</h2>
              <button className="hover:bg-gray-500 border w-32 hover:text-white border-black  text-black font-bold py-2 px-4 rounded">
                Discover
              </button>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="border-8 border-white transition-transform transform hover:scale-110 relative">
            <img src={image8} alt="zxc" />
            <div className="absolute top-0 left-2 mt-10 p-4 inset-0 flex flex-col  text-white">
              <h2 className="text-xl vsm:text-sm font-semibold text-black mb-2">sweeper and Dustpan <br/>by jan kochanski</h2>
              <button className="hover:bg-gray-500 border w-32 hover:text-white border-black  text-black font-bold py-2 px-4 rounded">
                Discover
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
