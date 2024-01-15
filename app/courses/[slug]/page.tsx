'use client';
import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './Courses.module.css';
import Header from '@/components/header/Header';
import instructors from '@/data/instructors';
import SectionMassageCourses from '@/containers/section_courses/SectionCourses';
import Contact from '@/components/contact/Contact';
import massageCoursesData from '@/data/massage_courses_data';
import manicureCoursesData from '@/data/manicure-courses_data';
import { useFormContext } from '@/components/formContextProvider/FormContextProvider';
import BookOnlineButton from '@/components/bookOnlineButton/BookOnlineButton';
import { CiInstagram } from 'react-icons/ci';
import BookOnlineModal from '@/components/bookOnlineModal/BookOnlineModal';

const Courses = () => {
  const [activeCourseTitle, setActiveCourseTitle] = useState('massage-courses');
  const [activeCourseData, setActiveCourseData] = useState(massageCoursesData);

  const { slug } = useParams();

  const { isModalOpen, setIsModalOpen, setFormInfo } = useFormContext();



  useEffect(() => {
    if (slug === 'massage') {
      setActiveCourseData(massageCoursesData);
      setActiveCourseTitle('massage-courses');
    } else {
      // while manicure course is off redirecting to massage courses
      setActiveCourseData(massageCoursesData);
      setActiveCourseTitle('massage-courses');
    }
  }, [slug]);

  //manicure courses options currently deactivated
  // const changeActiveCourse = (course: string) => {
  //   if (course === 'massage-courses') {
  //     setActiveCourseTitle('massage-courses');
  //     setActiveCourseData(massageCoursesData);
  //   } else {
  //     setActiveCourseTitle('manicure-courses');
  //     setActiveCourseData(manicureCoursesData);
  //   }
  // };

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
            {/* Toogle is off due to manicure course is currently disabled */}
            {/* <div className={styles.coursesTitleToggle}>
              <div
                className={
                  activeCourseTitle === 'massage-courses'
                    ? `${styles.coursesTitleActive} ${styles.coursesTitleMassage}`
                    : `${styles.coursesTitle} ${styles.coursesTitleMassage}`
                }
                onClick={() => changeActiveCourse('massage-courses')}
              >
                Курси масажу
              </div>
              <div
                className={
                  activeCourseTitle === 'manicure-courses'
                    ? `${styles.coursesTitleActive} ${styles.coursesTitleManicure}`
                    : `${styles.coursesTitle} ${styles.coursesTitleManicure}`
                }
                onClick={() => changeActiveCourse('manicure-courses')}
              >
                Курси манікюру
              </div>
            </div> */}
            <SectionMassageCourses courseData={activeCourseData} />
            <div className={styles.contactContainer}>
              <Contact />
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default Courses;
