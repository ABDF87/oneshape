import React, { useState, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Image from 'next/image';

type Photos = {
  photos: string[];
};

const BeforeAfterSlider = ({ photos }: Photos) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, []);

  let settings = {
    centrMode: true,
    centralPadding: '60px',
    slidesToShow: width < 825 ? 2 : 3,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    arrows: false,
    vertical: width < 430 ? true : false,
    verticalSwiping: width < 430 ? true : false,
  };

  const slideStyle: any = {
    width: '400px',
    height: '400px',
    padding: '10px',
    outline: 'none',
  };
  const slideContainer = {
    width: '100%',
    height: '300px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    outline: 'none',
  };

  return (
    <div>
      <Slider {...settings}>
        {photos.map((photo, index) => {
          return (
            <div style={slideContainer} key={index}>
              <Image
                style={slideStyle}
                src={photo}
                alt='массаж та манікюр в Ler Beauty'
                width={300}
                height={300}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default BeforeAfterSlider;
