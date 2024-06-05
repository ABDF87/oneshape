'use client';
import React from 'react';
import styles from './MassageArcadia.module.css';
import Image from 'next/image';
import BookOnlineButton from '@/components/bookOnlineButton/BookOnlineButton';
import { useFormContext } from '@/components/formContextProvider/FormContextProvider';
import { FaLocationDot } from 'react-icons/fa6';
import { Modal } from '@mui/material';

const MassageArcadia = () => {
  const { isModalOpen, setIsModalOpen, setFormInfo } = useFormContext();

  return (
    <main className={styles.mainContainer}>
      <section className={styles.header}>
        <Image
          alt=''
          //   src='/photos/massage-landing.jpg'
          src='/photos/leg-massage.jpg'
          width={500}
          height={500}
        />
        <div className={styles.layer}></div>
        <div className={styles.headerTitle}>
          <h1>Масаж</h1>
          <h2>в салоні One Shape</h2>
          <h3>Зберігаємо та відновлюємо ваше здоров'я, красу та молодість</h3>
        </div>
        {/* <div className={styles.headerButton}>
          <BookOnlineButton
            setIsModalOpen={setIsModalOpen}
            additionalFormInfo={{ service: 'Массаж обличчя', master: '' }}
            customBackgroundColor='#1b1b1b70'
            border='1px solid #fff'
            color='#fff'
          />
        </div> */}
        <div className={styles.headerAdress}>
          <FaLocationDot />

          <h4>Одеса, Аркадія</h4>
        </div>
      </section>
      <form className={styles.formContainer}>
        <h2>Записатися</h2>
        {/* <label className={styles.label}>Ім'я</label> */}
        <input name='name'  placeholder="Iм`я" className={styles.input} />

        {/* <label className={styles.label}>Телефон</label> */}
        <input name='tel' placeholder="Телефон" className={styles.input} />

        <button name='Заказати'  className={styles.formButton}>
        Відправити
        </button>
      </form>
      <section className={styles.ourMassagesContainer}>
        <div className={styles.ourMassagesTitle}>
          <h1>Масаж обличчя</h1>
        </div>
      </section>
    </main>
  );
};

export default MassageArcadia;
