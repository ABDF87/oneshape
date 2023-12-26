import React, { useState, useEffect } from 'react';
import styles from './Slider.module.css';
import promoSlides from '@/data/promo_slides';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const SliderShow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images: any = promoSlides;

  const imageStyle: any = {
    height: '50px',
    width: '50%',
  };
  const settings: any = {
    dots: true,
    dotsClass: `slick-dots ${imageStyle}`,
    infinite: true,
    autoplaySpeed: 4000,
    speed: 500,
    autoplay: true,
    pauseOnFocus: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index: any) => setCurrentSlide(index),
    customPaging: function (i: any) {
      return (
        <div
          style={{
            width: '8px',
            height: '8px',
            border: '0.5px solid white',
            borderRadius: '50%',
            position: 'absolute',
            bottom: '80px',
            background: i === currentSlide ? '#fff' : 'transparent',
          }}
        ></div>
      );
    },
  };
  const slideStyle: any = {
    width: '300px',
    height: '300px',
  };

  return (
    <Slider {...settings}>
      <div style={slideStyle}>
        {/* <Image
          src={images[0].url}
          alt='section_training'
          width={500}
          height={500}
          style={imageStyle}
        /> */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20%',
            padding: '50px',
            width: '100%',
            height: '600px',
            backgroundColor: '#353434',
            background: 'linear-gradient(90deg, #353434 0%, #000000 100%)',
          }}
        >
          <Image
            src={'/photos/massage-promo-2.webp'}
            alt='section_training'
            width={500}
            height={500}
            // style={imageStyle}
          />
          <div>
            <div style={{ color: 'white', fontSize: '150px', fontWeight: 800 }}>
              -50%
            </div>
            <div style={{ color: 'white', fontSize: '50px', fontWeight: 800 }}>
              на всі масажи
            </div>
          </div>
        </div>
      </div>
      <div style={slideStyle}>
        {/* <Image
          src={images[1].url}
          alt='section_training'
          width={500}
          height={500}
          style={imageStyle}
        /> */}
        <div
          style={{ width: '100%', height: '600px', backgroundColor: '#270404' }}
        ></div>
      </div>
      <div style={slideStyle}>
        {/* <Image
          src={images[2].url}
          alt='section_training'
          width={500}
          height={500}
          style={imageStyle}
        /> */}
        <div
          style={{ width: '100%', height: '600px', backgroundColor: '#6b6464' }}
        ></div>
      </div>
    </Slider>
  );
};


export default SliderShow;
