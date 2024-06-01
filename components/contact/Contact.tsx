'use client';
import React from 'react';
import styles from './Contact.module.css';
import { useFormContext } from '../formContextProvider/FormContextProvider';
import BookOnlineButton from '../bookOnlineButton/BookOnlineButton';

const Contact = () => {
  const { setIsModalOpen } = useFormContext();
  return (
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
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d578.0757255782535!2d30.763903572336996!3d46.43272948308042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c6330240d5d41f%3A0xcb10854844bb3526!2sOne%20Shape!5e0!3m2!1sru!2sua!4v1713259746976!5m2!1sru!2sua'
          width='100%'
          height='400'
          loading='lazy'
          //   referrerpolicy='no-referrer-when-downgrade'
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
