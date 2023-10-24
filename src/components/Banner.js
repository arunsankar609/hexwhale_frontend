import React from "react";
import ImageSlider from "../imageslider/ImageSlider";
import { Element } from "react-scroll";

const Banner = () => {
  return (
    <div className="w-full bg-[#f5f5f5]">
       <Element name="home">
      </Element>
      <ImageSlider />
    </div>
  );
};

export default Banner;
