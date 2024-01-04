import React, { useState, useEffect } from 'react';
import styles from './Slider.module.css';
import promoSlides from '@/data/promo_slides';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import localFont from 'next/font/local';
import BookOnlineModal from '../bookOnlineModal/BookOnlineModal';
import BookOnlineButton from '../bookOnlineButton/BookOnlineButton';

const boldFont = localFont({
  src: '../../public/fonts/DINPRO-CONDENSEDBOLD.ttf',
});

const regularFont = localFont({
  src: '../../public/fonts/DINPRO-CONDENSEDREGULAR.ttf',
});

const SliderShow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const images: any = promoSlides;

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, []);

  const imageStyle: any = {
    position: 'relative',
    height: '100% ',
    width: '100%',
  };

  const leyerImagesStyles: any = {
    display: width < 431 ? 'none' : 'block',
    position: 'absolute',
    top: '0px',
    right: '0',
    height: '100%',
    width: 'auto',
    transform: width < 830 ? 'translate(100px, -0%)' : 'translate(0%, 0%)',
  };

  const leyerTextStyles: any = {
    position: 'absolute',
    left: width < 431 ? '20px' : width < 830 ? '40px' : '250px',
    top: '20%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: width < 431 && 'center',
    // justifyContent:  width < 431 && 'center',
    // textAlign: width < 431 ? 'center' : width < 830 ? 'left' : 'left',
    height: '100%',
    width: 'auto',
    color: 'white',
    fontSize: '26px',
    transform: width < 830 ? 'translate(0px, -10%)' : 'translate(0%, -5%)',
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
            bottom: '60px',
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
  console.log('width', width);
  return (
    <Slider {...settings}>
      <div
        style={{
          // display: 'flex',
          // alignItems: 'center',
          // gap: '20%',
          // padding: '50px',
          width: '100%',
          height: '600px',
          backgroundColor: '#353434',
          background: 'linear-gradient(90deg, #353434 0%, #000000 100%)',
        }}
      >
        <div className={styles.bannerWrapper}>
          <Image
            src={'/photos/banners/general-background.jpeg'}
            alt='section_training'
            width={500}
            height={500}
            style={imageStyle}
          />
          <Image
            src={'/photos/banners/banner-1.png'}
            alt='ler-beauty'
            width={500}
            height={500}
            style={leyerImagesStyles}
          />
          <div style={{ ...leyerTextStyles }}>
            <span
              className={boldFont.className}
              style={{
                fontSize: '50px',
                transform: 'translate(0%, 70%)',
                color: 'rgb(253, 240, 208)',
              }}
            >
              Знижка до{' '}
            </span>
            <span
              style={{
                fontSize: '150px',
                padding: '0',
                color: 'rgb(253, 240, 208)',
              }}
              className={boldFont.className}
            >
              50%
            </span>
            <span
              style={{
                display: 'flex',
                justifyContent: width < 430 ? 'center' : 'left',
                textAlign: width < 430 ? 'center' : 'left',
                fontSize: '25px',
                fontWeight: '100',
                transform:
                  width < 430 ? 'translate(0%, 0%)' : 'translate(0%, -80%)',
                color: 'rgb(253, 240, 208)',
                width: width < 431 ? '80%' : width < 830 ? '70%' : '100%',
                marginTop: width < 430 ? '0px' : width < 830 ? '20px' : '0px',
              }}
            >
              на всі антицелюлітні програми
            </span>
          </div>
        </div>
      </div>
      <div style={slideStyle}>
        <div className={styles.bannerWrapper}>
          <Image
            src={'/photos/banners/general-background.jpeg'}
            alt='section_training'
            width={500}
            height={500}
            style={imageStyle}
          />
          <Image
            src={'/photos/banners/banner-2-1.png'}
            alt='ler-beauty'
            width={500}
            height={500}
            style={{
              ...leyerImagesStyles,
              top: '20px',
              right: width < 830 ? '-350px' : '0px',
              height: '95%',
              width: width < 830 ? '120%' : 'auto',
            }}
          />
          <div style={leyerTextStyles}>
            <span
              className={boldFont.className}
              style={{
                fontSize: '50px',
                transform: 'translate(0%, 70%)',
                color: 'rgb(253, 240, 208)',
              }}
            >
              Знижка{' '}
            </span>
            <span
              style={{
                fontSize: '150px',
                padding: '0',
                color: 'rgb(253, 240, 208)',
              }}
              className={boldFont.className}
            >
              40%
            </span>

            <span
              style={{
                transform: 'translate(0%, -50%)',
                backgroundColor: 'rgb(253, 240, 208)',
                width: '350px',
                height: '50px',
                borderRadius: '10px',
                display: 'flex',
                justifyContent: 'center',
                fontSize: '30px',
                fontWeight: '100',
                color: '#000',
              }}
            >
              на першу процедуру
            </span>
          </div>
        </div>
      </div>
      <div style={slideStyle}>
        <div className={styles.bannerWrapper}>
          <Image
            src={'/photos/banners/general-background.jpeg'}
            alt='section_training'
            width={500}
            height={500}
            style={imageStyle}
          />
          <Image
            src={'/photos/banners/banner-03.png'}
            alt='ler-beauty'
            width={500}
            height={500}
            style={{
              ...leyerImagesStyles,
              top: '0px',
              right: '0px',
              height: '100%',
              width: 'auto',
            }}
          />
          <div style={leyerTextStyles}>
            <span
              style={{
                fontSize: '30px',
                fontWeight: '100',
                transform: 'translate(0%, 40px)',
                color: 'rgb(253, 240, 208)',
              }}
            >
              При покупці абонемента
            </span>
            <span
              className={boldFont.className}
              style={{
                fontSize: width < 430 ? '50px' : '70px',
                transform:
                  width < 430 ? 'translate(0%, 60%)' : 'translate(0%, 40%)',
                color: 'rgb(253, 240, 208)',
                width: width < 430 ? '80%' : width < 830 ? '70%' : '100%',
              }}
            >
              Одна процедура
            </span>
            <span
              style={{
                fontSize: '70px',
                padding: '0',
                color: 'rgb(253, 240, 208)',
                transform:
                  width < 430
                    ? 'translate(0%, 60%)'
                    : width < 830
                    ? 'translate(0%, 80%)'
                    : 'translate(0%, 0%)',
              }}
              className={boldFont.className}
            >
              у подарунок
            </span>
          </div>
        </div>
      </div>
      <div style={slideStyle}>
        <div className={styles.bannerWrapper}>
          <Image
            src={'/photos/banners/general-background.jpeg'}
            alt='section_training'
            width={500}
            height={500}
            style={imageStyle}
          />
          <Image
            src={'/photos/banners/banner-04.png'}
            alt='ler-beauty'
            width={500}
            height={500}
            style={{
              ...leyerImagesStyles,
              top: width < 430 ? '50%' : width < 830 ? '40%' : '0px',
              right: width < 430 ? '15%' : '0px',
              height: width < 430 ? '400px' : '100%',
              width: width < 430 ? '100%' : 'auto',
              display: width < 430 && 'block',
            }}
          />
          <div style={leyerTextStyles}>
            <span
              className={boldFont.className}
              style={{
                fontSize: width < 430 ? '50px' : width < 830 ? '60px' : '70px',
                transform:
                  width < 430
                    ? 'translate(70px, 20%)'
                    : width < 830
                    ? 'translate(0%, 30%)'
                    : 'translate(0%, 80%)',
                color: 'rgb(253, 240, 208)',
              }}
            >
              Подарункові
            </span>
            <span
              style={{
                fontSize: width < 430 ? '50px' : width < 830 ? '60px' : '70px',
                padding: '0',
                color: 'rgb(253, 240, 208)',
                transform:
                  width < 430
                    ? 'translate(70px, 20%)'
                    : width < 830
                    ? 'translate(0%, 30%)'
                    : 'translate(0%, 80%)',
              }}
              className={boldFont.className}
            >
              сертифікати
            </span>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default SliderShow;
