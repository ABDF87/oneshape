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
import { FaChalkboardTeacher } from 'react-icons/fa';
import { GiTeacher } from 'react-icons/gi';
import { FaPeoplePulling } from 'react-icons/fa6';
import { FiClock } from 'react-icons/fi';
import { LuCalendarClock } from 'react-icons/lu';
import { TbFileCertificate } from 'react-icons/tb';
import { PiStudent } from 'react-icons/pi';

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
              src='/photos/intsructor_photos/insructor-training-1.jpg'
            
              width={500}
              height={500}
            />
            <div className={styles.headerText}>
              <div className={styles.headerTitle}>АВТОРСЬКІ КУРСИ</div>
              <div className={styles.headerTitle}> МАСАЖУ ОБЛИЧЧЯ </div>

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

          <div className={styles.scheduleContainer}>
            Старт онлайн навчання з 15 червня
            <br />
            <div className={styles.divider}></div>
            Офлайн навчання 22-23 червня
          </div>
          <section className={styles.courseConditionsDescription}>
            <div className={styles.courseConditionsDescriptionItem}>
              <div className={styles.courseConditionsDescriptionItemImage}>
                <PiStudent />
              </div>

              <div className={styles.courseConditionsDescriptionItemValue}>
                Навчайтесь в салоні One Shape в Одесі
                <br />
                або онлайн
              </div>
            </div>
            {/* <div className={styles.courseConditionsDescriptionItemHalfWrapper}>
          <div className={styles.courseConditionsDescriptionItemHalf}>
            <div className={styles.courseConditionsDescriptionItemImage}>
              <LuCalendarClock />
            </div>

            <div className={styles.courseConditionsDescriptionItemValue}>
            2 рази на місяць
              <br />
              по вихідних
            </div>
          </div>
          <div className={styles.courseConditionsDescriptionItemHalf}>
            <div className={styles.courseConditionsDescriptionItemImage}>
              <FiClock />
            </div>
            <div className={styles.courseConditionsDescriptionItemValue}>
            2 дні
              <br />
              10:00 - 17:00
            </div>
          </div>
          </div> */}
            <div className={styles.courseConditionsDescriptionItem}>
              <div className={styles.courseConditionsDescriptionItemImage}>
                <FaPeoplePulling />
              </div>
              <div className={styles.courseConditionsDescriptionItemValue}>
                Навчайтесь індивідуально
                <br />
                або в групі
              </div>
            </div>
            <div className={styles.courseConditionsDescriptionItem}>
              <div className={styles.courseConditionsDescriptionItemImage}>
                <TbFileCertificate />
              </div>
              <div className={styles.courseConditionsDescriptionItemValue}>
                Отримуйте сертифікат
              </div>
            </div>
          </section>
          <div className={styles.coursesContainer}>
            <section className={styles.offlineCourse}>
              <GiTeacher size={50} />
              <div className={styles.offLineCourseTitle}>Офлайн навчання</div>
              <div style={{ marginBottom: '20px' }}>
                в салоні One Shape (Одеса)
              </div>
              <ul className={styles.onlineCourseDescroption}>
                <li>
                  На курсі Ви освоїте масаж обличчя від А до Я з робочими
                  техніками, без води.
                </li>
                <br />
                <li>
                  90% навчання це практика, де ми ставимо руку та доводимо рухи
                  до досконалості.
                </li>
                <br />
                <li>
                  Завдяки великому спектру видів масажу які будемо розбирати, ви
                  зможете самостійно діагностувати та підбирати техніки під
                  кожного клієнта індивідуально та завжди бути в топі майстрів.
                </li>
                <br />
                <li>
                  Тривалість навчання 2 дні
                  <br />
                  з 10:00 до 17:00
                  <br />
                  (якщо якісь техніки не виходять можемо затриматися)
                </li>
                <br />
                <li>
                  Навчання проходить в місті Одеса за адресою Гагарінське плато
                  5а
                </li>
                <br />
                <li>Старт навчання: 22-23 червня 2024 р.</li>
                <br />
                <li>Ціна: 7500 грн </li>
              </ul>
              <BookOnlineButton
                text='ЗАМОВИТИ КУРС'
                additionalFormInfo={{
                  service: 'Навчання ',
                  master: '',
                }}
                setIsModalOpen={setIsModalOpen}
                setFormInfo={setFormInfo}
                customBackgroundColor='transparent'
                color='#4a4e69'
                border='1px solid #4a4e69'
              />
            </section>
            <section className={styles.onlineCourse}>
              <FaChalkboardTeacher size={50} />
              <div className={styles.onlineCourseTitle}>Онлайн навчання</div>
              <ul className={styles.onlineCourseDescroption}>
                <li>Всі навчальні матеріали надаються у відео форматі.</li>
                <br />
                <li>
                  Відео уроки відзняті дуже близько, всі рухи/техніки чітко
                  видно, гарна якість відео, відео можна ставити на паузу, все
                  для вашого комфорту
                </li>
                <br />
                <li>
                  Після відпрацювання технік ви надсилаєте короткі відео своїх
                  робіт, після чого я даю зворотній звʼязок: - що змінити, що не
                  так, що покращити, де помилки;
                </li>

                <br />
                <li>
                  На онлайн навчанні ми матимемо
                  <br />
                  2 зум-зустрічі:
                  <br />
                  На першій зустрічі ми знайомимось, навчаємось та
                  відпрацьовуємо техніки на собі. На другій робимо розбори,
                  корегуємо ваші роботи іт.д.
                </li>
                <br />
                <li>
                  Також у нас буде чат де ви зможете задавати свої питання,
                  описувати складнощі та проблеми тому самі ви точно не
                  залишитесь, я завжди на звʼязку.
                </li>
                <br />
                <li>
                  Старт навчання – 15 червня
                  <br />
                  Ціна - 5500 грн
                </li>
              </ul>
              <BookOnlineButton
                text='ЗАМОВИТИ КУРС'
                additionalFormInfo={{
                  service: 'Навчання ',
                  master: '',
                }}
                setIsModalOpen={setIsModalOpen}
                setFormInfo={setFormInfo}
                customBackgroundColor='transparent'
                color='#4a4e69'
                border='1px solid #4a4e69'
              />
            </section>
          </div>
          <section className={styles.instructorContainer}>
            <div className={styles.instructorTitle}>Викладач курсу</div>
            <div className={styles.instructorWrapper}>
              <div className={styles.instructorImage}>
                <Image
                  alt='інструктор з масажу'
                  src={'/photos/masters/master-portfolio-Tatiana_Sklema.jpg'}
                  width={300}
                  height={300}
                />
              </div>
                <div className={styles.instructorDescription}>
                  <div className={styles.layerInstructor}></div>
                  <div className={styles.instructorName}>Тетяна Склема</div>
                  <div className={styles.instructorInfo}>
                    Вахівець з більше як 10 річним довідом.
                    <div className={styles.dividerInstructor}></div>
                    Власник салону One Shape
                    <br />
                    (Одеса, Аркадія)
                    <div className={styles.dividerInstructor}></div>
                    Веде викладацьку діяльність 4 роки за які випустила десятки
                    учениць.
                    <div className={styles.dividerInstructor}></div>
                    Володіє сімома техніками масажу обличчя, а також
                    лімфодренажними техніками по тілу.
                    <div className={styles.dividerInstructor}></div>
                    Виконує вісцеральний масаж, тейпування, роботу з тригерними
                    точками.
                    <div className={styles.dividerInstructor}></div>
                    Виступає спікером на конфернеціях, презентуючи масажні
                    техніки.
                  </div>
                </div>
              <div className={styles.videoInstructorContainer}>
                <video
                  controls
                  playsInline
                  src='https://res.cloudinary.com/dwxlzszxy/video/upload/v1717334828/instructor-sklema_massage_ni4xvr.mp4'
                />
              </div>
            </div>
          </section>

          {/* <SectionMassageCourses courseData={massageCoursesData} /> */}

          <div className={styles.instructorGallery}>
            <div className={styles.instructorGalleryTitle}>Галерея</div>
            <div className={styles.instructorGalleryWrapper}>
              <Image
                alt=''
                src='/intsructor_photos/instructor-cert-3.jpg'
                width={500}
                height={500}
              />
              <Image
                alt=''
                src='/intsructor_photos/instructor-cert-group.jpg'
                width={500}
                height={500}
              />
              <Image
                alt=''
                src='/intsructor_photos/istructor-cert-1.jpg'
                width={500}
                height={500}
              />
              <Image
                alt=''
                src='/intsructor_photos/instrucor-cert-2.jpg'
                width={500}
                height={500}
              />
              <Image
                alt=''
                src='/intsructor_photos/insructor-training-1.jpg'
                width={500}
                height={500}
              />
              <Image
                alt=''
                src='/intsructor_photos/instructor-training-2.jpg'
                width={500}
                height={500}
              />{' '}
              <Image
                alt=''
                src='/intsructor_photos/instructor-conference.jpg'
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className={styles.caseContainer}>
            <div className={styles.caseTitle}>Кейс Аполинарії Вермінської</div>
            <Image alt='' src='/case/case-photo.jpg' width={500} height={500} />
            <video
              controls
              playsInline
              src='https://res.cloudinary.com/dwxlzszxy/video/upload/v1717243513/case-vide0-1_d1brwp.mp4'
            />
            <video
              controls
              playsInline
              src='https://res.cloudinary.com/dwxlzszxy/video/upload/v1717243521/case-video-2_wipzre.mp4'
            />
            <video
              controls
              playsInline
              src='https://res.cloudinary.com/dwxlzszxy/video/upload/v1717243519/case-video-3_h8s51b.mp4'
            />
            <video
              controls
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
