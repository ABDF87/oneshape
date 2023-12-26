'use client';
import React, { use, useContext } from 'react';
import styles from './Home.module.css';
import Header from '@/components/header/Header';
import Slider from '@/components/promo-slider/Slider';
import Contact from '@/components/contact/Contact';
import Image from 'next/image';
import AnchorButtons from '@/components/anchorButtons/AnchorButtons';
import { FaMapLocationDot } from 'react-icons/fa6';
import { FaPeopleGroup } from 'react-icons/fa6';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { WiTime9 } from 'react-icons/wi';
import MassageCoursesBanner from '@/components/massageCoursesBanner/MassageCoursesBanner';
import SectionFeedback from '@/containers/section_feedback/SectionFeedback';
import massageFeedback from '@/data/massageFeedback';
import BookOnlineModal from '@/components/bookOnlineModal/BookOnlineModal';
import { FormContext } from '@/components/formContextProvider/FormContextProvider';
import { useFormContext } from '@/components/formContextProvider/FormContextProvider';
import { Slide } from '@mui/material';

const Home = () => {
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
          <div className={styles.sectionSlider}>
            <Slider />
          </div>
          <div className={styles.sectionMassage}>
            <div className={styles.sectionContentContainer}>
              <div className={styles.contentWrapper}>
                <div className={styles.sectionTitle}>Масаж</div>

                <div className={styles.sectionPhotoContainer}>
                  {/* <div className={styles.layer}></div> */}
                  <div className={styles.imageWrapper}>
                    <div className={styles.imageTitle}>Cпина</div>
                    <Image
                      src='/photos/massage-back.jpg'
                      alt='massage'
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className={styles.imageWrapper}>
                    <div className={styles.imageTitle}>Шія</div>
                    <Image
                      src='/photos/massage-neck.jpg'
                      alt='massage'
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className={styles.imageWrapper}>
                    <div className={styles.imageTitle}>Лімфодренаж</div>
                    <Image
                      src='/photos/massage-stomac.jpg'
                      alt='massage'
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className={styles.imageWrapper}>
                    <div className={styles.imageTitle}>Лице</div>
                    <Image
                      src='/photos/cosmetology-landing.jpg'
                      alt='massage'
                      width={500}
                      height={500}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.massageButtonContainer}>
                <div className={styles.massageButtonContainerExtention}> </div>
                <AnchorButtons
                  setIsModalOpen={setIsModalOpen}
                  customBackgroundColor='black'
                  customColor='white'
                  hoverBackgroundColor='grey'
                  hoverColor='white'
                  url='/massage'
                  additionalFormInfo={{service: 'Масаж', master: ''}}
                  setFormInfo={setFormInfo}
                />
              </div>
            </div>
          </div>
          <div className={styles.sectionBenefits}>
            {/* <div className={styles.sectionTitle}>Переваги</div> */}
            <div className={styles.benefitsContainer}>
              <div className={styles.benefitItem}>
                <div className={styles.benefitItemImage}>
                  <FaPeopleGroup />
                </div>
                <div className={styles.benefitItemText}>
                  <div className={styles.benefitItemTitle}>Майстри</div>
                  <div className={styles.benefitItemDescription}>
                    Наші майстри мають великий досвід роботи та постійно
                    підвищують свою кваліфікацію.
                  </div>
                </div>
              </div>
              <div className={styles.benefitItem}>
                <div className={styles.benefitItemImage}>
                  <WiTime9 />
                </div>
                <div className={styles.benefitItemText}>
                  <div className={styles.benefitItemTitle}>Зручний розклад</div>
                  <div className={styles.benefitItemDescription}>
                    Ми працюємо з 9:00 до 21:00, щоб ви могли знайти час для
                    себе
                  </div>
                </div>
              </div>
             


              <div className={styles.benefitItem}>
                <div className={styles.benefitItemImage}>
                  <FaMapLocationDot />
               
                </div>
                <div className={styles.benefitItemText}>
                  <div className={styles.benefitItemTitle}>Локація</div>
                  <div className={styles.benefitItemDescription}>
                    Ми знаходимось в самому центрі Аркадії, щоб ви могли легко
                    до нас дістатись
                  </div>
                </div>
              </div>
        
              <div className={styles.benefitItem}>
                <div className={styles.benefitItemImage}>
                  <FaChalkboardTeacher />
                </div>
                <div className={styles.benefitItemText}>
                  <div className={styles.benefitItemTitle}>Навчання</div>
                  <div className={styles.benefitItemDescription}>
                    Ми навчаємо майбутніх майстрів масажу та манікюру в нашій
                    школі краси
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.sectionManicure}>
            <div className={styles.sectionContentContainer}>
              <div className={styles.manicureContentWrapper}>
                <div className={styles.sectionPhotoContainer}>
                  <div className={styles.imageWrapper}>
                    <div className={styles.imageTitleManicure}>Манікюр</div>
                    <Image
                      src='/photos/manicure-landing-bezh.jpg'
                      alt='massage'
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className={styles.imageWrapper}>
                    <div className={styles.imageTitleManicure}>Педікюр</div>
                    <Image
                      src='/photos/manicure/pedicureBG.jpeg'
                      alt='massage'
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className={styles.imageWrapper}>
                    <div className={styles.imageTitleManicure}>
                      Подологічні послуги
                    </div>
                    <Image
                      src='/photos/manicure/manicure-ba-heel2-a.jpg'
                      alt='massage'
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className={styles.imageWrapper}>
                    <div className={styles.imageTitleManicure}>
                      Парфінотерапія
                    </div>
                    <Image
                      src='/photos/manicure/parafin-therapy.png'
                      alt='massage'
                      width={500}
                      height={500}
                    />
                  </div>
                </div>
                <div className={styles.sectionTitleManicure}>Манікюр</div>
              </div>
              <div className={styles.manicureButtonContainer}>
                <AnchorButtons
                  url='/manicure'
                  setIsModalOpen={setIsModalOpen}
                  customBackgroundColor='black'
                  customColor='white'
                  hoverBackgroundColor='grey'
                  hoverColor='white'
                  additionalFormInfo={{service: 'Манікюр', master: ''}}
                  setFormInfo={setFormInfo}
                />
                <div className={styles.massageButtonContainerExtention}> </div>
              </div>
            </div>
          </div>
          <MassageCoursesBanner />
          <div className={styles.sectionFeedbacks}>
            <SectionFeedback feedbacksData={massageFeedback} />
          </div>
          <div className={styles.sectionContact}>
            <Contact />
          </div>
        </>
      )}
    </main>
  );
};

export default Home;
