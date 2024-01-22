'use client';
import React from 'react';
import styles from './FaceMassage.module.css';
import Header from '@/components/header/Header';
import BookOnlineButton from '@/components/bookOnlineButton/BookOnlineButton';
import { useFormContext } from '@/components/formContextProvider/FormContextProvider';
import BookOnlineModal from '@/components/bookOnlineModal/BookOnlineModal';
import BeforeAfterSlider from '@/components/before-after-slider/BeforeAfterSlider';
import massage_ba_data from '@/data/massage_ba_data';
import { TiStar } from 'react-icons/ti';
import Image from 'next/image';
import BookForm from '@/components/bookForm/BookForm';
import { BsFillTelephoneFill } from 'react-icons/bs';

const FaceMassage = () => {
  const { isModalOpen, setIsModalOpen } = useFormContext();

  const callConversionTracking = () => {
    `return gtag_report_conversion('tel:+380970415216');" href="tel:+380970415216`
  };

  return (
    <div className={styles.mainContainer}>
      {!isModalOpen && (
        <>
          <Header />
          <div className={styles.topContainer}>
            <div className={styles.imageContainer}>
              <Image
                alt=''
                src='/photos/cosmetology-landing.jpg'
                width={500}
                height={500}
              />
              <Image
                alt=''
                src='/photos/massage-neck.jpg'
                width={500}
                height={500}
              />
              <Image
                alt=''
                src='/photos/inter-oral-massage.jpg'
                width={500}
                height={500}
              />
            </div>
            <div className={styles.imageMobileContainer}></div>

            <div className={styles.pageTitle}>Масаж обличчя</div>
            <div className={styles.pageSubtitle}>від салону One Shape </div>
            <div className={styles.topContactsContainer}>
            <div className={styles.pageSubtitleTwo}>
              Аркадія, Гагарінське плато 5а{' '}
            </div>
            <a href='tel:+380970415216' onClick={callConversionTracking}>
              +38 (097) 041-52-16
            </a>
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
          <section className={styles.serviceDescriptionSection}>
            <div className={styles.serviceDescriptionTitle}>Про масаж</div>
            <div className={styles.serviceDescriptionWrapper}>
              <div className={styles.serviceDescriptionText}>
                <ul>
                  <div className={styles.listItemWrapper}>
                    <TiStar />
                    <li>омолоджує</li>
                  </div>
                  <div className={styles.listItemWrapper}>
                    <TiStar />
                    <li>знімає набряки</li>
                  </div>
                  <div className={styles.listItemWrapper}>
                    <TiStar />
                    <li>підтягне овал обличчя</li>
                  </div>
                  <div className={styles.listItemWrapper}>
                    <TiStar />
                    <li>сформує гарний кут молодості</li>
                  </div>
                  <div className={styles.listItemWrapper}>
                    <TiStar />
                    <li>позбавить від другого підборіддя </li>
                  </div>

                  <div className={styles.listItemWrapper}>
                    <div>
                      {' '}
                      <TiStar />
                    </div>
                    <li>позбавить від кісетних зморшки довкола губ</li>
                  </div>

                  <div className={styles.listItemWrapper}>
                    <div>
                      <TiStar />
                    </div>
                    <li>
                      підніме верхнє повіко, позбавить від гусиних лапок довкола
                      очей
                    </li>
                  </div>
                  <div className={styles.listItemWrapper}>
                    <div>
                      {' '}
                      <TiStar />
                    </div>
                    <li>
                      розглядить заломи, мімічні зморшки на лобі, міжбровку та
                      носогубні складки
                    </li>
                  </div>
                  <div className={styles.listItemWrapper}>
                    <div>
                      {' '}
                      <TiStar />
                    </div>
                    <li>
                      покращить тургор шкіри, стимулює створення природнього
                      колагену та еластану.
                    </li>
                  </div>
                  <div className={styles.listItemWrapper}>
                    <div>
                      {' '}
                      <TiStar />
                    </div>
                    <li>
                      приведе м&apos;язи в нормотонус, позбавить від головного
                      болю, бруксизмів, покращить сон
                    </li>
                  </div>
                </ul>
              </div>
              <div className={styles.videoWrapper}>
                <video
                  className={styles.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  src='/videos/video-face-massage.mp4'
                />
              </div>
            </div>
            <BookOnlineButton
              setIsModalOpen={setIsModalOpen}
              additionalFormInfo={{ service: 'Массаж обличчя', master: '' }}
              customBackgroundColor='#070707'
              border='1px solid #fff'
              color='#fff'
            />
          </section>

          <section className={styles.serviceTechnicSection}>
            <div className={styles.serviceTechnicTitle}>
              Технікі які ми викорістовуємо
            </div>
            <div className={styles.serviceTechnicContainer}>
              <div className={styles.serviceTechnicItem}>
                <div className={styles.serviceTechnicItemTitle}>
                  М&apos;які мануальні техніки
                </div>
              </div>
              <div className={styles.serviceTechnicItem}>
                <div className={styles.serviceTechnicItemTitle}>
                  Лімфодренажні
                </div>
              </div>
              <div className={styles.serviceTechnicItem}>
                <div className={styles.serviceTechnicItemTitle}>
                  Скульптуруючі
                </div>
              </div>
              <div className={styles.serviceTechnicItem}>
                <div className={styles.serviceTechnicItemTitle}>Фасціальні</div>
              </div>
              <div className={styles.serviceTechnicItem}>
                <div className={styles.serviceTechnicItemTitle}>
                  Інтероральні(букальні)
                </div>
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
          <section className={styles.mastersSection}>
            <div className={styles.mastersTitle}>Наші майстри</div>
            <div className={styles.mastersContainer}>
              <div className={styles.masterItem}>
                <Image
                  className={styles.bannerNails}
                  alt='manicure'
                  src='/photos/masters/master-portfolio-Tanya.jpg'
                  width={500}
                  height={500}
                />{' '}
                <div className={styles.masterDescription}>
                  <div className={styles.masterName}>Тетяна Склема</div>
                  <div className={styles.masterDescriptionText}>
                    <div>Досвід: 10 років</div>
                    <div>Топ-майстер масажу</div>
                    <div> Майстер-інструктор</div>
                    <div>4 роки викладацької діяльності</div>
                  </div>
                </div>
              </div>
              <div className={styles.masterItem}>
                <Image
                  className={styles.bannerNails}
                  alt='manicure'
                  src='/photos/masters/massage-master-2.jpg'
                  width={500}
                  height={500}
                />{' '}
                <div className={styles.masterDescription}>
                  <div className={styles.masterName}>Єлизавета Афанасьєва </div>
                  <div className={styles.masterDescriptionText}>
                    <div>Досвід: 2 роки </div>
                    <div>Майстер масажу</div>
                    <div> Медична освіта</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
      <div style={{ height: '50px' }}></div>
      <BookOnlineModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      <div className={styles.contactsSection}>
        <div className={styles.formWrapper}>
          <BookForm />
        </div>
        <div className={styles.telNumContainer}>
          <div className={styles.adress}>
            <div>Одеса, Аркадія</div>
            <div> вул Гагарінське плато 5а</div>
          </div>
          <div className={styles.telNum}>
            <BsFillTelephoneFill />
            <a href='tel:+380970415216' onClick={callConversionTracking}>
              +38 (097) 041-52-16
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaceMassage;
