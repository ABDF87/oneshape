import React, { useState } from 'react';
import styles from './ServicesSection.module.css';
import Image from 'next/image';
import BookOnlineButton from '@/components/bookOnlineButton/BookOnlineButton';
import { useFormContext } from '@/components/formContextProvider/FormContextProvider';

interface Props {
  services: {
    name: string;
    price: string;
    description: string;
    duration: string;
    image: string;
  }[];
  sectionTitle: string;
  serviceType: string;
}

const ServicesSection = ({ services, sectionTitle, serviceType }: Props) => {
  const [isDescriptionShowed, setIsDescriptionShowed] =
    useState<boolean>(false);
  const [activeDescription, setActiveDescription] = useState<number>();

  const { setIsModalOpen, setFormInfo } = useFormContext();

  const showDescriptionHandler = (index: any) => {
    setIsDescriptionShowed(true);
    setActiveDescription(index);
    console.log(index);
  };
  const hideDescriptionHandler = (index: any) => {
    setIsDescriptionShowed(false);
    setActiveDescription(-1);
    console.log(index);
  };
  return (
    <section className={styles.serviceSection}>
      <div className={styles.titleService}>{sectionTitle}</div>

      <div className={styles.servicesContainer}>
        {services.map(
          ({ name, price, description, duration, image }, index) => (
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
                    style={{ transform: 'rotate:90deg' }}
                  />
                </div>

                <div className={styles.serviceDescriptionContainer}>
                  <div className={styles.serviceDescription}>
                    {isDescriptionShowed && activeDescription === index && (
                      <>
                        <div className={styles.serviceDescriptionText}>
                          {description}
                        </div>

                        <div className={styles.servicePrice}>
                          Ціна: {price} грн. за {duration} хв.
                        </div>
                      </>
                    )}
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
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
