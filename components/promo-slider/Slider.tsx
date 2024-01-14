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
import { useFormContext } from '../formContextProvider/FormContextProvider';
import Slide from '@mui/material/Slide';

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

  const { isModalOpen, setIsModalOpen, setFormInfo } = useFormContext();

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

  const settings: any = {
    dots: true,
    dotsClass: `slick-dots ${imageStyle}`,
    infinite: true,
    autoplaySpeed: 3000,
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

  return (
    <Slider {...settings}>
      <div style={slideStyle}>
        <div className={styles.bannerWrapper}>
            <Image
              src={'/photos/banners/banner-1.png'}
              alt='oneshape масаж'
              width={500}
              height={500}
              className={styles.leyerImagesStyles}
            />
          <div
            className={styles.leyerTextStyles}
          >
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
            <span className={styles.leyerTextLight}>
              на всі антицелюлітні програми
            </span>

            <BookOnlineButton
              setIsModalOpen={setIsModalOpen}
              customBackgroundColor={'transparent'}
              color={'#fdf0d0'}
              border=' 1px solid #fdf0d0'
              setFormInfo={setFormInfo}
              additionalFormInfo={{
                service: 'Знижка до 50% на антицеллюлітні програми ',
                master: '',
              }}
            />
          </div>
        </div>
      </div>
      <div style={slideStyle}>
        <div className={styles.bannerWrapper}>
          <Image
            src={'/photos/banners/banner-2-1.png'}
            alt='OneShape масаж'
            width={500}
            height={500}
            className={styles.leyerImagesStyles}
          />
          <div className={styles.leyerTextStyles}>
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
            </span>
            <BookOnlineButton
              setIsModalOpen={setIsModalOpen}
              customBackgroundColor={'transparent'}
              color={'#fdf0d0'}
              border=' 1px solid #fdf0d0'
              setFormInfo={setFormInfo}
              additionalFormInfo={{
                service: 'Знижка до 40% на першу процедуру',
                master: '',
              }}
            />
          </div>
        </div>
      </div>
      <div style={slideStyle}>
        <div className={styles.bannerWrapper}>
          <Image
            src={'/photos/banners/banner-03.png'}
            alt='ler-beauty'
            width={500}
            height={500}
            className={styles.leyerImagesStyles}
          />
          <div className={styles.leyerTextStyles}>
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
                fontSize: width < 430 ? '50px' : '70px',
                padding: '0',
                color: 'rgb(253, 240, 208)',
                marginBottom:
                  width < 430 ? '80px' : width < 830 ? '110px' : '20px',
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

            <BookOnlineButton
              setIsModalOpen={setIsModalOpen}
              customBackgroundColor={'transparent'}
              color={'#fdf0d0'}
              border=' 1px solid #fdf0d0'
              setFormInfo={setFormInfo}
              additionalFormInfo={{
                service: '+1 безкоштовна процедура при покупці абонемента',
                master: '',
              }}
            />
          </div>
        </div>
      </div>
      <div style={slideStyle}>
        <div className={styles.bannerWrapper}>
          <Image
            src={
              width < 830
                ? '/photos/banners/Баннер-004-2.png'
                : '/photos/banners/banner-04.png'
            }
            alt='ler-beauty'
            width={500}
            height={500}
            className={styles.leyerImagesStyles}
          />
          <div className={styles.leyerTextStyles}>
            <span
              className={boldFont.className}
              style={{
                fontSize: width < 430 ? '50px' : width < 830 ? '60px' : '70px',
                transform:
                  width < 430
                    ? 'translate(0px, 0%)'
                    : width < 830
                    ? 'translate(0%, 30%)'
                    : 'translate(0%, 0%)',
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
                    ? 'translate(0px, 0%)'
                    : width < 830
                    ? 'translate(0%, 30%)'
                    : 'translate(0%, 0%)',
                marginBottom:
                  width < 430 ? '30px' : width < 830 ? '50px' : '20px',
              }}
              className={boldFont.className}
            >
              сертифікати
            </span>
            <BookOnlineButton
              setIsModalOpen={setIsModalOpen}
              customBackgroundColor={'transparent'}
              color={'#fdf0d0'}
              border=' 1px solid #fdf0d0'
              setFormInfo={setFormInfo}
              additionalFormInfo={{
                service: 'Подарунковий сертифікат',
                master: '',
              }}
            />
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default SliderShow;
