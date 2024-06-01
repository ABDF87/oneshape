'use client';
import React from 'react';
import styles from './Face_massage_courses.module.css';
import Image from 'next/image';
import BookOnlineButton from '@/components/bookOnlineButton/BookOnlineButton';
import SectionMassageCourses from '@/containers/section_courses/SectionCourses';
import massageCoursesData from '@/data/massage_courses_data';
import { CiInstagram } from 'react-icons/ci';
import { useFormContext } from '@/components/formContextProvider/FormContextProvider';
import BookOnlineModal from '@/components/bookOnlineModal/BookOnlineModal';

const FaceMassageCourses = () => {
  const { isModalOpen, setIsModalOpen, setFormInfo } = useFormContext();
  const openInstagram = () => {
    window.location.href =
      'https://www.instagram.com/massage_sklema_odessa?igsh=NzZoOWt3d2d3c3ho';
  };
  return (
    <div className={styles.mainContainer}>
      <BookOnlineModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      {!isModalOpen && (
        <>
          <section className={styles.topContainerSection}>
            <div className={styles.topWrapper}>
              {/* <div className={styles.layer}></div> */}
              <video
                className={styles.video}
                autoPlay
                loop
                muted
                playsInline
                src='/videos/courses-banner.mov'
              />
              <div className={styles.titleTopContainer}>
                <div className={styles.titleTop}>Навчання</div>
                <div className={styles.descriptionTop}>
                  Навчайтесь масажу у нашого топ майстра
                </div>
                <div className={styles.bookButtonTopContainer}>
                  <BookOnlineButton
                    setIsModalOpen={setIsModalOpen}
                    setFormInfo={setFormInfo}
                    additionalFormInfo={{ service: 'Навчання', master: '' }}
                    border='1px solid #fff'
                    customBackgroundColor='transparent'
                    color='#fff'
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
          <div className={styles.header}>
            <Image
              alt=''
              src='/photos/cosmetology-landing.jpg'
              width={500}
              height={500}
            />
            <div className={styles.headerText}>
              <div className={styles.headerTitle}>АВТОРСЬКІ КУРСИ</div>
              <div className={styles.headerTitle}> МАСАЖУ ОБЛИЧЧЯ</div>
              <div className={styles.headerTitleName}> від Тетяни Склеми</div>
              <div className={styles.instaContainer} onClick={openInstagram}>
                <div className={styles.instaLogo}>
                  <CiInstagram onClick={openInstagram} />
                </div>
                {/* <div className={styles.instaTitle} onClick={openInstagram}>instagram</div> */}
              </div>
              <div className={styles.bookButtonContainer}>
                <BookOnlineButton
                  setIsModalOpen={setIsModalOpen}
                  additionalFormInfo={{ service: 'Массаж обличчя', master: '' }}
                  customBackgroundColor='#1b1b1b70'
                  border='1px solid #fff'
                  color='#fff'
                />
              </div>
            </div>
          </div>

          <SectionMassageCourses courseData={massageCoursesData} />
          <div className={styles.caseContainer}>
            <div className={styles.caseTitle}>Кейс Аполинарії Вермінської</div>
            <Image alt='' src='/case/case-photo.jpg' width={500} height={500} />
            <video
              className={styles.video}
              controls
              loop
              muted
              playsInline
              src='https://res.cloudinary.com/dwxlzszxy/video/upload/v1717243513/case-vide0-1_d1brwp.mp4'
            />
            <video
              className={styles.video}
              controls
              loop
              muted
              playsInline
              src='https://res.cloudinary.com/dwxlzszxy/video/upload/v1717243521/case-video-2_wipzre.mp4'
            />
            <video
              className={styles.video}
              controls
              loop
              muted
              playsInline
              src='https://res.cloudinary.com/dwxlzszxy/video/upload/v1717243519/case-video-3_h8s51b.mp4'
            />
            <video
              className={styles.video}
              controls
              loop
              muted
              playsInline
              src='https://res.cloudinary.com/dwxlzszxy/video/upload/v1717243516/case-video-4_tk8nus.mp4'
            />
          </div>
        </>
      )}
    </div>
  );
};

export default FaceMassageCourses;
