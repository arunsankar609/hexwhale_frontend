import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import banner1 from '../images/banner1.jpg'
import banner2 from '../images/banner2.jpg'
import banner3 from '../images/banner3.jpg'
import banner4 from '../images/banner4.jpg'
import image6 from '../images/image-6.jpg'
import image5 from '../images/image-7.jpg'
import image8 from '../images/image-8.jpg'

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div style={{ width: '80%', margin: '0 auto' }}> {/* Set a fixed width */}
      <Slider {...settings} className=''>
        <div className="relative">
          <img src={banner1} alt="ii 1" style={{ width: '100%' }} /> {/* Set the image width to 100% */}
          <div className="absolute md:top-1/2 sm:top-4 vsm:top-1  md:right-2/6 md:left-48    text-center text-white">
            <h2 className="text-2xl font-semibold text-black mb-2">Think Different & <br/> Do it otherwise</h2>
            <p className="mb-4 font-semibold text-black">Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit, sed do eiusmod tempor</p>
            <button className="hover:bg-gray-500 border hover:text-white border-black  text-black font-bold py-2 px-4 rounded">Discover Now</button>
          </div>
        </div>
        <div>
          <img src={banner2} alt="rr 2" style={{ width: '100%' }} />
        </div>
        <div>
          <img src={banner3} alt="ff 3" style={{ width: '100%' }} />
        </div>
        <div>
          <img src={banner4} alt="tt 3" style={{ width: '100%' }} />
        </div>
        {/* Add more images as needed */}
      </Slider>
      <div className='flex bg-[#f5f5f5] w-full'>
  <div className='border-8 border-white'>
    <img src={image6} alt='zxc'/>
  </div>
  <div className='border-8 border-white'>
    <img src={image5} alt='zxc'/>
  </div>
  <div className='border-8 border-white'>
    <img src={image8} alt='zxc'/>
  </div>
</div>


    </div>
  );
};

export default ImageSlider;
