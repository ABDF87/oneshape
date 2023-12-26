'use client';
import React, { useState } from 'react';
import styles from './Manicure.module.css';
import Header from '@/components/header/Header';
import Image from 'next/image';
import manicureMasters from '@/data/manicureMasters';
import manicureServices from '@/data/manicureServices';
import manicureFeedback from '@/data/manicureFeedback';
import ServicesSection from '@/containers/section_services/ServicesSection';
import SectionFeedback from '@/containers/section_feedback/SectionFeedback';
import Contact from '@/components/contact/Contact';
import { CiInstagram } from 'react-icons/ci';
import BeforeAfterSlider from '@/components/before-after-slider/BeforeAfterSlider';
import manicure_ba_data from '@/data/manicure_ba_data';
import manicureWorksData from '@/data/manicureWorksData';
import Link from 'next/link';
import BookOnlineModal from '@/components/bookOnlineModal/BookOnlineModal';
import { useFormContext } from '@/components/formContextProvider/FormContextProvider';
import BookOnlineButton from '@/components/bookOnlineButton/BookOnlineButton';
import MastersSection from '@/containers/section_masters/MastersSection';
const Manicure = () => {
  const [activeManicureWork, setActiveManicureWork] = useState<number>(0);

  const { isModalOpen, setIsModalOpen, setFormInfo } = useFormContext();

  const handleManicureWorkClick = (index: number) => {
    if (index === activeManicureWork) return;
    setActiveManicureWork(index);
  };

  return (
    <main className={styles.mainContainer}>
      {!isModalOpen && (
        <>
          <Header />
          <div className={styles.innerContainer}>
            <section className={styles.topContainerSection}>
              <div className={styles.topWrapper}>
                {/* <div className={styles.layer}></div> */}
                <video
                  className={styles.video}
                  autoPlay
                  loop
                  muted
                  src='/videos/massage-video.mp4'
                />
                <div className={styles.titleTopContainer}>
                  <div className={styles.titleTop}>Манікюр</div>
                  <div className={styles.descriptionTop}>
                    Насолоджуйтесь манікюром від наших майстрів
                  </div>
                  <div className={styles.bookButtonTopContainer}>
                    <BookOnlineButton
                      setIsModalOpen={setIsModalOpen}
                      setFormInfo={setFormInfo}
                      additionalFormInfo={{ service: 'Манікюр', master: '' }}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.sideLayer}>
                <div className={styles.instaContainer}>
                  <div className={styles.instaLogo}>
                    <CiInstagram />
                  </div>
                  <div className={styles.instaTitle}>instamanicure</div>
                </div>
              </div>
            </section>
            <ServicesSection
              services={manicureServices}
              sectionTitle='Наші послуги'
              serviceType='манікюр'
            />
            <MastersSection mastersData={manicureMasters} />

            <section className={styles.goToCoursesSection}>
              <div className={styles.goToCoursesLayer}></div>
              <div className={styles.goToCoursesContainer}>
                <div className={styles.goToCoursesTitle}>
                  Хочеш стати cпеціалістом з манікюру?
                </div>
                <div className={styles.goToCoursesDescription}>
                  Навчайся у нашого топ-майстера та отримуй високооплачувану
                  професію
                </div>
                <div className={styles.goToCoursesButton}>
                  <Link href='/courses/manicure'>
                    подивитися программу курса
                  </Link>
                </div>
              </div>
            </section>
            <section className={styles.ourWorksSection}>
              <div className={styles.titleOurWorks}>Наші роботи</div>
              <div className={styles.ourWorksContainer}>
                {/* <div className={styles.ourWorksLayer}></div> */}
                <div className={styles.ourWorksContainerLeft}>
                  {manicureWorksData.map((photo, index) => {
                    if (index === activeManicureWork)
                      return (
                        <div className={styles.dispalyedManicurePhoto}>
                          <Image
                            alt='фото манікюру в салоні Ler Beauty'
                            src={photo}
                            width={500}
                            height={500}
                          />
                        </div>
                      );
                  })}
                </div>
                <div className={styles.ourWorksContainerRight}>
                  {manicureWorksData.map((photo, index) => {
                    return (
                      <div className={styles.ourWorksPhotoWrapper}>
                        <div
                          className={styles.ourWorksPhoto}
                          onClick={() => handleManicureWorkClick(index)}
                        >
                          <Image
                            alt='фото манікюру в салоні Ler Beauty'
                            src={photo}
                            width={500}
                            height={500}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
            <section className={styles.beforeAndAfterSection}>
              <div className={styles.titleBeforeAndAfter}>
                Наші роботи з подології <br /> "до і після"
              </div>
              <div className={styles.beforeAndAfterContainer}>
                <BeforeAfterSlider photos={manicure_ba_data} />
              </div>
            </section>
            <SectionFeedback feedbacksData={manicureFeedback} />
            <div
              style={{
                width: '120%',
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: '#edebeb',
              }}
            >
              <Contact />
            </div>
          </div>
        </>
      )}
      <BookOnlineModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </main>
  );
};

export default Manicure;
