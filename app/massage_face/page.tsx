'use client';
import React, { useState, useRef } from 'react';
import axios from 'axios';
import styles from './MassageFace.module.css';
import Image from 'next/image';
import BookOnlineButton from '@/components/bookOnlineButton/BookOnlineButton';
import { useFormContext } from '@/components/formContextProvider/FormContextProvider';
import { FaLocationDot } from 'react-icons/fa6';
import { Modal } from '@mui/material';
import BeforeAfterSlider from '@/components/before-after-slider/BeforeAfterSlider';
import massage_ba_data from '@/data/massage_ba_data';
import SectionFeedback from '@/containers/section_feedback/SectionFeedback';
import massageFeedback from '@/data/massageFeedback';
import { CiHeart } from 'react-icons/ci';

const MassageFace = () => {
  const { isModalOpen, setIsModalOpen, setFormInfo } = useFormContext();
  const [formSent, setFormSent] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const form: any = useRef();

  const formData = {
    service_id: 'service_shape',
    template_id: 'template-shape-form1',
    user_id: 'Tvjqo-2HvVtUE0Nei',
    template_params: {
      client_name: name,
      client_phone: phone,
      message: 'massage landing',
    },
  };

  const sendEmail = (e: any) => {
    e.preventDefault();

    const result = axios
      .post('https://api.emailjs.com/api/v1.0/email/send', formData)
      .then((result: any) => {
        setFormSent(true);
        setName('');
        setPhone('');
      })
      .catch((error: any) => {
        console.log('error', error);
      });
  };

  return (
    <main className={styles.mainContainer}>
      <section className={styles.header}>
        <img
          alt=''
          //   src='/photos/massage-landing.jpg'
          src='https://res.cloudinary.com/dwxlzszxy/image/upload/v1718223936/cosmetology-landing_jvuuj4.jpg'
          width={500}
          height={500}
        />
        <div className={styles.layer}>
          <div className={styles.headerTitle}>
            <h1>Масаж обличчя</h1>
            <h2>від експертів салону One Shape</h2>
            <h3>
              Виглядайте молодшими, приберіть зморшки та подвійне підборіддя вже
              після першой процедури
            </h3>
          </div>
          <div className={styles.headerAdress}>
            <FaLocationDot />

            <h4>Гагарінське плато, 5а</h4>
          </div>
        </div>
        {formSent ? (
          <div className={styles.formSentText}>
            Заявка відправлена <br /> Наш адміністратор зв&apos;яжеться з вами
            <br />у найближчий час
          </div>
        ) : (
          <form
            className={styles.formContainer}
            onSubmit={sendEmail}
            ref={form}
          >
            <h2>Записатися</h2>
            {/* <label className={styles.label}>Ім'я</label> */}
            <input
              type='text'
              className={styles.input}
              name='client_name'
              placeholder="Iм'я"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />

            {/* <label className={styles.label}>Телефон</label> */}
            <input
              type='phone'
              name='client_phone'
              placeholder='Телефон'
              className={styles.input}
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              required
            />

            <button name='Заказати' className={styles.formButton}>
              Відправити
            </button>
          </form>
        )}
      </section>

      <section className={styles.hook}>
        <div className={styles.hookTitle}>
          Чи дійсно є ефект після першої ж процедури?
        </div>
        <div className={styles.hookParagraph}>
          Так! Еффект омолодження настає вже під час массажу. Зморшки
          розгладжуються, овал обличчя підтягується, а друге підборіддя стає
          менш помітним. Це зумовлено тим що майстер знімає напругу в
          м&apos;язах обличчя чим покращує обмінні процеси в тканинах, що в свою
          чергу стимулює вироботку колагену та еластану. В результаті
          підвищується тургор шкіри і ви одразу спостерігаєте ліфтинг еффект,
          який буде продовжуватись ще декілька днів після процедури.
        </div>
        <div className={styles.beforeAndAfterContainer}>
          <BeforeAfterSlider photos={massage_ba_data} />
        </div>
        {/* <img src={'/photos/beforeafter3.jpg'} /> */}
      </section>

      <section className={styles.hook}>
        <div className={styles.hookTitle}>Унікальна можливість</div>
        <div className={styles.hookParagraph}>
          Якщо ви живете в Одесі, то у вас є можливість потрапити на процедуру
          до одного з найкращіх майстрів з массажу обличчя в Україні - Тетяни
          Склеми або її учениць. Тетяна спеціалізується саме на масажі обличчя
          більше вісьми років, проводе процедури, навчає майстрів, виступає на
          професійних конференціях популярізуючи остані методики та ділючись
          досвідом. В салоні One Shape яким володіє Тетяна підримуються найвищі
          стандарти щодо майстрів, відбувається постійне підвищення їх
          кваліфікації та контроль за якістю процедур.
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '10px',
          }}
        >
          <img
            src={
              'https://res.cloudinary.com/dwxlzszxy/image/upload/v1718542599/sklema-pers-massage_mx5jrf.jpg'
            }
            style={{ width: '45%', height: 'auto' }}
          />
          <img
            src={'/photos/intsructor_photos/instructor-training-2.jpg'}
            style={{ width: '45%', height: 'auto' }}
          />
        </div>
        <img src={'/photos/intsructor_photos/instructor-conference.jpg'} />
      </section>
      <section className={styles.hook}>
        <div className={styles.hookTitle}>Техніки в яких ми експерти</div>
        <div className={styles.hookParagraph}>
          <ul>
            <li>
              <CiHeart /> Лімфодренажні
            </li>
            <li>
              <CiHeart />
              Міофесціальні{' '}
            </li>
            <li>
              <CiHeart />
              Букальні{' '}
            </li>
            <li>
              <CiHeart />
              RF ліфтинг{' '}
            </li>
            <li>
              <CiHeart />
              Скульптуруючі{' '}
            </li>
          </ul>
        </div>
        <video
          className={styles.videoWrapper}
          src={
            'https://res.cloudinary.com/dwxlzszxy/video/upload/v1718709056/Tetiana_reel_massage1_koufjs.mov'
          }
          width={600}
          height={500}
          autoPlay
          muted
          loop
        />
      </section>
      <section className={styles.hook}>
        <div className={styles.hookTitle}>У нас затишно </div>
        <div className={styles.hookParagraph}>
          В One Shape ми цінуємо комфорт та красу. Наші фахівці створюють
          унікальну атмосферу затишку і спокою, де ви можете повністю
          розслабитися та насолодитися професійним масажем. Ми використовуємо
          передові техніки та високоякісні засоби, щоб ваша шкіра сяяла
          здоров&apos;ям і молодістю. Завітайте до нас і переконайтеся, що краса
          може бути не лише естетичною, але й комфортною.
        </div>
        <img
          src={
            'https://res.cloudinary.com/dwxlzszxy/image/upload/v1718224144/salon-room_pruyop.jpg'
          }
          alt='massage'
          width={600}
          height={500}
        />
      </section>

      <section className={styles.hook}>
        <div className={styles.hookTitle}>
          <h1>Як нас знайти</h1>
        </div>
        <div className={styles.adressContainer}>
          Салон One Shape розташований по вул. Гагаринське плато 5а, к2(2
          перлина)
        </div>
        <img
          src={
            'https://res.cloudinary.com/dwxlzszxy/image/upload/v1718224146/salon-entrance_i47ogs.jpg'
          }
          alt='massage'
          width={600}
          height={500}
        />
        <div className={styles.mapWrapper}>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2749.8005647989603!2d30.76271074354353!3d46.432832389276676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c6330240d5d41f%3A0xcb10854844bb3526!2sOne%20Shape!5e0!3m2!1sru!2sua!4v1718188020363!5m2!1sru!2sua'
            width='100%'
            height='450'
            style={{ border: '0', borderRadius: '5px', padding: '10px' }}
            loading='lazy'
            // referrerpolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
      </section>

      <SectionFeedback feedbacksData={massageFeedback} />
    </main>
  );
};

export default MassageFace;
