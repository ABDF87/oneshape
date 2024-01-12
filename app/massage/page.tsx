'use client';
import React, { useState } from 'react';
import styles from './Massage.module.css';
import Header from '@/components/header/Header';
import ServicesSection from '@/containers/section_services/ServicesSection';
import SectionFeedback from '@/containers/section_feedback/SectionFeedback';
import Image from 'next/image';
import { FaRegStar } from 'react-icons/fa';
import { CiInstagram } from 'react-icons/ci';
import massageMasters from '@/data/massage_masters';
import massageServices from '@/data/massage_services';
import massageFeedback from '@/data/massageFeedback';
import BeforeAfterSlider from '@/components/before-after-slider/BeforeAfterSlider';
import SliderShow from '@/components/promo-slider/Slider';
import Contact from '@/components/contact/Contact';
import Link from 'next/link';
import massage_ba_data from '@/data/massage_ba_data';
import { useFormContext } from '@/components/formContextProvider/FormContextProvider';
import BookOnlineModal from '@/components/bookOnlineModal/BookOnlineModal';
import BookOnlineButton from '@/components/bookOnlineButton/BookOnlineButton';
import MastersSection from '@/containers/section_masters/MastersSection';

const Massage = () => {

  const { isModalOpen, setIsModalOpen, setFormInfo } = useFormContext();
  
  return (
    <main className={styles.mainContainer}>
      <BookOnlineModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
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
                  playsInline
                  src='/videos/massage-video.mp4'
                />
                <div className={styles.titleTopContainer}>
                  <div className={styles.titleTop}>Масаж</div>
                  <div className={styles.descriptionTop}>
                    Ваше здоров&#39;я, молодість та неперевершений вигляд
                  </div>
                  <div className={styles.bookMassageButtonContainer}>
                    <BookOnlineButton
                      setIsModalOpen={setIsModalOpen}
                      setFormInfo={setFormInfo}
                      additionalFormInfo={{ service: 'Масаж', master: '' }}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.sideLayer}>
                <div className={styles.instaContainer}>
                  <div className={styles.instaLogo}>
                    <CiInstagram />
                  </div>
                  <div className={styles.instaTitle}>instamassage</div>
                </div>
              </div>
            </section>

            <ServicesSection
              services={massageServices}
              sectionTitle='Наші масажи'
              serviceType='масаж'
            />
            <MastersSection mastersData={massageMasters} />

            <section className={styles.goToCoursesSection}>
              <div className={styles.goToCoursesLayer}></div>
              <div className={styles.goToCoursesContainer}>
                <div className={styles.goToCoursesTitle}>
                  Хочеш стати масажистом?
                </div>
                <div className={styles.goToCoursesDescription}>
                  Навчайся у нашого топ-майстера та отримуй високооплачувану
                  професію
                </div>
                <div className={styles.goToCoursesButton}>
                  <Link href='/courses/massage'>
                    подивитися программу курса
                  </Link>
                </div>
              </div>
            </section>

            <section className={styles.beforeAndAfterSection}>
              <div className={styles.titleBeforeAndAfter}>
                Наші роботи &ldquo;до і після&ldquo;
              </div>
              <div className={styles.beforeAndAfterContainer}>
                <BeforeAfterSlider photos={massage_ba_data} />
              </div>
            </section>

            <SectionFeedback feedbacksData={massageFeedback} />
            {/* <div
              className={styles.feedbackSession}
              style={{
                width: '100%',
                height: '500px',
                padding: '30px',
                // backgroundImage: 'url(/photos/banners/general-background.jpeg)',
              }}
            >
              <div
                className={styles.feedbackTitle}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  color: 'balck',
                  fontSize: '30px',
                  marginTop: '30px',
                  marginBottom: '30px',
                }}
              >
                Відгуки наших клієнтів
              </div>
              <div
                className={styles.feedbackWrapper}
                style={{
                  display: 'flex',
                  gap: '20px',
                  backgroundColor: '#fff',
                  padding: '0px',
                  width: '100%',
                  height: '300',
                  borderRadius: '10px',
          
                }}
              >
                <Image
                  alt='feedback'
                  src='/photos/feedbacks/feedback-massage-01c.jpeg'
                  width={500}
                  height={500}
                  style={{ width: '250px', height: '200px', borderRadius: '10px' }}
                />
                 <Image
                  alt='feedback'
                  src='/photos/feedbacks/feedback-massage-course-02c.jpeg'
                  width={500}
                  height={500}
                  style={{ width: '250px', height: '100%', borderRadius: '10px' }}
                />
                <Image
                  alt='feedback'
                  src='/photos/feedbacks/feedback-massage-course-01c.jpeg'
                  width={500}
                  height={500}
                  style={{ width: '250px', height: '250px', borderRadius: '10px' }}
                />
               
              </div>
            </div> */}
            <div
              style={{
                width: '110%',
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
    </main>
  );
};

export default Massage;
