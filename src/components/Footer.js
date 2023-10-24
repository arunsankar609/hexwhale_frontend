import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import orange from "../images/oranage.png";
import { Element } from "react-scroll";

const Footer = () => {
  return (
    <div className="w-full bg-black pt-6 mt-6 pb-6">
      
      <div className="flex flex-wrap justify-evenly ">
        <div className="text-white space-y-2 space-x-2">
          <img src={orange} alt="iuiy" />
          <h1 className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing <br />
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </h1>
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" /> Location
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />{" "}
            hello@gmail.com
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} className="mr-2" /> 9961604823
          </p>
        </div>

        <div className="text-white">
        <Element name="contact"><h1 className="text-lg font-semibold">Information</h1></Element>
          
          <ul>
            <li>About us</li>
            <li>careers</li>
            <li>Delivery Inforamtion</li>
            <li>Privacy Policy</li>
            <li>Terms and condition</li>
          </ul>
        </div>

        <div className="text-white">
          <h1 className="text-lg font-semibold">Customer Service</h1>
          <ul>
            <li>Shipping Policy</li>
            <li>Help and contact us</li>
            <li>Returns and Funds</li>
            <li>Online Stores</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>
      </div>
      <div className="border-b border-white w-[100%] mx-2 my-4"></div>
      <div className="flex justify-evenly">
        <div>
          <h1 className="text-lg font-thin text-white">
            Copyright @ Hexstock all rights reserved.Powered by Hexwhale
          </h1>
        </div>
        <div className="text-white">
          <p className="space-x-4">
            <FontAwesomeIcon icon={faInstagram} className="mr-2" />
            <FontAwesomeIcon icon={faFacebook} className="mr-2" />
            <FontAwesomeIcon icon={faGoogle} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
