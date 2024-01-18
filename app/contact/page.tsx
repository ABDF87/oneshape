'use client';
import React from 'react';
import styles from './Contact.module.css';
import Header from '@/components/header/Header';
import BookOnlineButton from '@/components/bookOnlineButton/BookOnlineButton';
import { useFormContext } from '@/components/formContextProvider/FormContextProvider';
import BookOnlineModal from '@/components/bookOnlineModal/BookOnlineModal';

const Contacts = () => {

  const { isModalOpen, setIsModalOpen } = useFormContext();

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
            <div className={styles.contactsContainer}>
              <div className={styles.contactsWrapper}>
                <div className={styles.contactsInnerWrapperLeft}>
                  <p>Одеса, Аркадія </p>
                  <p>вул. Гагарінське плато 5а</p>
                  <p>(2 перлина)</p>
                  <p> Часи роботи: </p>
                  <p>10:00 - 18:00</p>
                </div>
                <div className={styles.divider}></div>
                <div className={styles.contactsInnerWrapperRight}>
                <a href='tel:+380970415216'>+38 (097) 041-52-16</a>
                  <div className={styles.buttonWrapper}>
                    <BookOnlineButton
                      setIsModalOpen={setIsModalOpen}
                      customBackgroundColor='transparent'
                      color='#000'
                      border='1px solid #000'              
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.mapContainer}>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d590.2210264256846!2d30.764122778376638!3d46.43282020010021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1699889866422!5m2!1sru!2sua'
                width='100%'
                height='400'
                loading='lazy'
              ></iframe>
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default Contacts;
