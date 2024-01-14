import React, { useState, useEffect } from 'react';
import styles from './ServicesSection.module.css';
import Image from 'next/image';
import BookOnlineButton from '@/components/bookOnlineButton/BookOnlineButton';
import { useFormContext } from '@/components/formContextProvider/FormContextProvider';
import Slide from '@mui/material/Slide';
import { TiStar } from 'react-icons/ti';

interface Props {
  services: {
    name: string;
    price: string;
    description: any;
    duration: string;
    image: string;
  }[];
  sectionTitle: string;
  serviceType: string;
}

const ServicesSection: React.FC<Props> = ({
  services,
  sectionTitle,
  serviceType,
}) => {
  const [isDescriptionShowed, setIsDescriptionShowed] =
    useState<boolean>(false);
  const [activeDescription, setActiveDescription] = useState<number>();

  const [isVisible, setIsVisible] = useState(false);

  const { setIsModalOpen, setFormInfo } = useFormContext();

  const showDescriptionHandler = (index: any) => {
    setIsDescriptionShowed(true);
    setActiveDescription(index);
  };
  const hideDescriptionHandler = (index: any) => {
    setIsDescriptionShowed(false);
    setActiveDescription(-1);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window === undefined) return;
      let threshold;
      if (window.innerHeight >= 1200) {
        threshold = 700;
      } else if (window.innerHeight < 1200 && window.innerHeight > 940) {
        threshold = 300;
      } else if (window.innerHeight < 940) {
        threshold = 100;
      }
      const currentScrollY = window.scrollY;
      if (threshold === undefined) return;
      setIsVisible(currentScrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className={styles.serviceSection}>
      <div className={styles.titleService}>{sectionTitle}</div>

      <div className={styles.servicesContainer}>
        {services.map(
          ({ name, price, description, image }, index) => (
            <div
              className={styles.serviceContainer}
              onMouseEnter={() => showDescriptionHandler(index)}
              onMouseLeave={hideDescriptionHandler}
            >
              {/* <div className={styles.serviceLayer}></div> */}
              <div className={styles.serviceContinarInnerWrapper}>
                <div className={styles.serviceName}>{name}</div>
                <div className={styles.servicePhotoWrapper}>
                  <Image
                    src={image}
                    alt='massage'
                    width={500}
                    height={500}
                    style={{ transform: 'translate(0, -20%)' }}
                  />
                </div>
                <div className={styles.serviceDescriptionContainer}>
                  <div className={styles.serviceDescription}>
                    {/* {isDescriptionShowed && activeDescription === index && ( */}
                    <div className={styles.serviceDescriptionText}>             
                      <ul className={styles.descriptionList}>
                        {description.map((item: any, index: number) => (
                          <li className={styles.descriptionListItem} >
                            <div className={styles.serviceDescriptionItem}
                          
                            >
                              <div style={{color:'yellow'}}>
                                <TiStar />
                              </div>
                              <div key={index}>{item}</div>
                            </div>
                          </li>
                        ))}
                      </ul>         
                    </div>
                    <Slide
                      direction='up'
                      in={isVisible}
                      mountOnEnter
                      unmountOnExit
                    >
                      <div className={styles.servicePrice}>
                        Ціна: від {price} грн. 
                        {/* за {duration} хв. */}
                      </div>
                    </Slide>

                    {/* )} */}
                  </div>

                  {/* <div className={styles.bottomServiceWrapper}>
                  <div className={styles.bookServiceButtonWrapper}>
                    <div className={styles.bookServiceButton}>
                      записатись
                    </div>
                  </div>
                </div> */}
                </div>
              </div>
            </div>
          )
        )}
        <div className={styles.bookOnlineButtonWrapper}>
          <BookOnlineButton
            setFormInfo={setFormInfo}
            setIsModalOpen={setIsModalOpen}
            additionalFormInfo={{ service: serviceType, master: '' }}
            color='#fff'
            customBackgroundColor='#070707'
            border='1px solid #070707'
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
