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
import { CiCircleCheck } from 'react-icons/ci';

const MassageFace = () => {
  const { isModalOpen, setIsModalOpen, setFormInfo } = useFormContext();
  const [formSent, setFormSent] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [showForm, setShowForm] = useState(false);

  const form: any = useRef();

  const showFormHandler = () => {
    setShowForm(true);
  };

  const formData = {
    service_id: 'service_shape',
    template_id: 'template-shape-form1',
    user_id: 'Tvjqo-2HvVtUE0Nei',
    template_params: {
      client_name: name,
      client_phone: phone,
      message: 'заявка з лендінгу обличчя -40%',
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
        <div className={styles.headerFrame}></div>
        <div className={styles.headerTopWrapper}>
          <div className={styles.headerTitleWrapper}>
            <div className={styles.headerTitle}>One Shape</div>
            <div className={styles.headerSubTitle}>
              cтудія природньої
              <br /> естетики обличчя
            </div>
          </div>
          <div className={styles.headerContactsWrapper}>
            <div className={styles.headerContactsNumber}>
              +38 (063) 571 19 96{' '}
            </div>
            <div className={styles.headerContactsAdress}>
              Гагарінське плато, 5а
            </div>
          </div>
        </div>
        <div className={styles.headerPhotoContainer}>
          <img
            className={styles.headerPhoto}
            src='https://res.cloudinary.com/dwxlzszxy/image/upload/v1720172527/2024-07-05_11.36.48_jyee0l.jpg'
            alt='massage_face'
            width={600}
            height={400}
          />
        </div>
        <div className={styles.headerDescriptionContainer}>
          <div className={styles.headerDescriptionContainerTitle}>
            МАСАЖ ОБЛИЧЧЯ
          </div>
          <div className={styles.headerDescriptionContainerOptions}>
            <div>Ручний</div>
            <div>Інтраоральний</div>
            <div>Апаратний</div>
          </div>
        </div>
        <div className={styles.divider}> </div>
      </section>
      {/* <section className={styles.header}>
       
        <video
          className={styles.videoHeader}
          src={
            'https://res.cloudinary.com/dwxlzszxy/video/upload/v1718709056/Tetiana_reel_massage1_koufjs.mov'
          }
          width={600}
          height={500}
          autoPlay
          muted
          loop
        />
        <div className={styles.layer}>
          <div className={styles.brandLabel}>
          <a href="tel:+380635711996">+380(63)571 19 96</a>
          <a href="tel:++380970415216">+380(97)041 52 16</a>
          </div>
          <div className={styles.headerTitle}>
            <h1>МАСАЖ</h1>
            <h2> ОБЛИЧЧЯ</h2>
            <h3>В АРКАДІЇ</h3>
          </div>
          <div className={styles.headerDescription}>
            <div className={styles.headerDescriptionItem}>
            <CiCircleCheck />

              Спеціалізований салон з масажу
            </div>
            <div className={styles.headerDescriptionItem}>
            <CiCircleCheck />

              Працюють майстри топ рівня
            </div>
            <div className={styles.headerDescriptionItem}>
            <CiCircleCheck />

              Авторська методика
            </div>
            <div className={styles.headerDescriptionItem}>
            <CiCircleCheck />

              Результат з першої процедури
            </div>
          </div>
          <div className={styles.discountContainer}>
            <div className={styles.discountContainerNumber}><p>-40%</p></div>
            <div className={styles.discountContainerDescription}>
              <div>на першу</div>
              <div>процедуру</div>
            </div>
          </div>

          <div className={styles.headerAdress}>
            <FaLocationDot />
            <h4>Гагарінське плато, 5а</h4>
          </div>
        </div>
      </section> */}
      {formSent ? (
        <div className={styles.formSentText}>
          Заявка відправлена <br /> Наш адміністратор зв&apos;яжеться з вами
          <br />у найближчий час
        </div>
      ) : !showForm ? (
        <div className={styles.showFormButton} onClick={showFormHandler}>
          ЗАПИСАТИСЯ
        </div>
      ) : (
        <form className={styles.formContainer} onSubmit={sendEmail} ref={form}>
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
      <section className={styles.hook}>
        <div className={styles.hookTitle} style={{ color: '#5F432E' }}>
          Ціни
        </div>
        <div
          className={styles.hookParagraph}
          style={{
            alignItems: 'start',
            backgroundColor: '#fff',
            color: '#5F432E',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              justifyContent: 'space-between',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                justifyContent: 'space-between',
              }}
            >
             <div style={{fontWeight:'600'}}> Масаж обличчя:</div>
            ручний + інтраоральний + RF ліфтинг
            </div>
            <br/>
            <div
              style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'space-between',
              }}
            >
              <div>Тривалість:</div>
              <div> 60 хв.</div>
            </div>
          </div>

          <br />
          <div
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'space-between',
            }}
          >
            <div>Одна процедура:</div>
            <div> 800 грн.</div>
          </div>
          <br />
          <div
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'space-between',
            }}
          >
            <div>Абонемент 10 процедур:</div>
            <div> 7000 грн.</div>
          </div>
          <div>+ 1 масаж у подарунок</div>
          <br />

          {/* <div style={{ marginBottom: '10px' }}>Процедура включає:</div>

          <div>Ручний скульптуруючий масаж</div>
          <div>Інтраоральний масаж</div>
          <div>RF-ліфтинг</div> */}
        </div>
      </section>
      <div className={styles.divider}> </div>
      {/* <section className={styles.hook}>
        <div className={styles.hookTitle}>Техніки в яких ми експерти</div>
        <div className={styles.hookParagraph}>
          <ul>
            <li>
              <CiCircleCheck />
              Лімфодренажні
            </li>
            <li>
              <CiCircleCheck />
              Міофесціальні{' '}
            </li>
            <li>
              <CiCircleCheck />
              Букальні{' '}
            </li>
            <li>
              <CiCircleCheck />
              RF ліфтинг{' '}
            </li>
            <li>
              <CiCircleCheck />
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
      </section> */}
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
        <div className={styles.hookTitle}>
          Масаж обличчя - наша спеціалізація
        </div>
        <div className={styles.hookParagraph}>
          Якщо ви живете в Одесі, то у вас є можливість потрапити на процедуру
          до одного з найкращіх майстрів з массажу обличчя в Україні - Тетяни
          Склеми або її учениць. Тетяна спеціалізується саме на масажі обличчя
          більше восьми років, проводе процедури, навчає майстрів, виступає на
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
