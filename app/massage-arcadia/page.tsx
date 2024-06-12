'use client';
import React, { useState, useRef } from 'react';
import axios from 'axios';
import styles from './MassageArcadia.module.css';
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

const MassageArcadia = () => {
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
          src='https://res.cloudinary.com/dwxlzszxy/image/upload/v1718223775/leg-massage_pqwaoe.jpg'
          width={500}
          height={500}
        />
        <div className={styles.layer}>
          <div className={styles.headerTitle}>
            <h1>Масаж</h1>
            <h2>в салоні One Shape</h2>
            <h3>
              Зберігаємо та відновлюємо ваше здоров&apos;я, красу та молодість
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

      <section className={styles.ourMassagesContainer}>
        {/* обличчя */}
        <div className={styles.faceMassageContainer}>
          <div className={styles.sectionTitle}>
            <div className={styles.faceMassageImageWrapper}>
              <img
                src={'https://res.cloudinary.com/dwxlzszxy/image/upload/v1718223936/cosmetology-landing_jvuuj4.jpg'}
                alt='massage'
                width={600}
                height={500}
              />
            </div>{' '}
            <div className={styles.titleTextWrapper}>
              <h1>Масаж обличчя</h1>
              <h3>Виглядайте молодше</h3>
            </div>
          </div>
          <div className={styles.massageItemContainer}>
            <div className={styles.massageItem}>
              {/* <div className={styles.massageItemNumber}>1</div> */}
              <CiHeart />
              Позбавляє зморшок
            </div>

            <div className={styles.massageItem2Color}>
              {/* <div className={styles.massageItemNumber2Color}>2</div> */}
              <CiHeart />
              Пзбавляє набряків
            </div>
            <div className={styles.massageItem}>
              {/* <div className={styles.massageItemNumber}>3</div> */}
              <CiHeart />
              Позбавляє другого підборіддя
            </div>
            <div className={styles.massageItem2Color}>
              {/* <div className={styles.massageItemNumber2Color}>4</div> */}
              <CiHeart />
              Створює кут молодості
            </div>
            <div className={styles.massageItem}>
              <CiHeart />
              {/* <div className={styles.massageItemNumber}>5</div> */}
              Підтягує овал обличчя
            </div>
          </div>
          <div className={styles.priceContainer}>
            <div>Ціна:</div> <div>від 700 грн.</div>
          </div>
          <div className={styles.beforeAndAfterContainer}>
            <BeforeAfterSlider photos={massage_ba_data} />
          </div>
        </div>
        <div className={styles.divider}></div>
        {/* спина */}
        <div className={styles.faceMassageContainer}>
          <div className={styles.sectionTitle}>
            <div className={styles.titleTextWrapper}>
              <h1>Масаж спини</h1>
              <h3>Будьте здоровішою</h3>
            </div>
            <div className={styles.faceMassageImageWrapper}>
              <img
                src={'https://res.cloudinary.com/dwxlzszxy/image/upload/v1718223954/anticellu-massage_p8kxmp.jpg'}
                alt='massage'
                width={600}
                height={500}
              />
            </div>
          </div>
          <div className={styles.massageItemContainer}>
            <div className={styles.massageItem}>
              {/* <div className={styles.massageItemNumber}>1</div> */}
              <CiHeart />
              Позбавляє болю
            </div>

            <div className={styles.massageItem2Color}>
              {/* <div className={styles.massageItemNumber2Color}>2</div> */}
              <CiHeart />
              Знімає спазми в м&apos;язах
            </div>
            <div className={styles.massageItem}>
              {/* <div className={styles.massageItemNumber}>3</div> */}
              <CiHeart />
              Знімає напругу
            </div>
            <div className={styles.massageItem2Color}>
              {/* <div className={styles.massageItemNumber}>3</div> */}
              <CiHeart />
              Поліпшує кровотік
            </div>
            <div className={styles.massageItem}>
              {/* <div className={styles.massageItemNumber}>3</div> */}
              <CiHeart />
              Відновлює тонус м&apos;язів
            </div>
          </div>
          <div className={styles.priceContainer}>
            <div>Ціна:</div> <div>від 500 грн.</div>
          </div>
        </div>
        <div className={styles.divider}></div>
        {/* лімфа */}
        <div className={styles.faceMassageContainer}>
          <div className={styles.sectionTitle}>
            <div className={styles.faceMassageImageWrapper}>
              <img
                src={'https://res.cloudinary.com/dwxlzszxy/image/upload/v1718223775/leg-massage_pqwaoe.jpg'}
                alt='massage'
                width={600}
                height={500}
              />
            </div>{' '}
            <div className={styles.titleLimfoTextWrapper}>
              <h1>
                Лімфодренажний <br /> масаж
              </h1>
              <h3>Почувайтесь краще</h3>
            </div>
          </div>
          <div className={styles.massageItemContainer}>
            <div className={styles.massageItem}>
              {/* <div className={styles.massageItemNumber}>1</div> */}
              <CiHeart />
              Позбавляє від набряків у тілі
            </div>

            <div className={styles.massageItem2Color}>
              {/* <div className={styles.massageItemNumber2Color}>2</div> */}
              <CiHeart />
              Зменьшує об&apos;єми тіла
            </div>
            <div className={styles.massageItem}>
              {/* <div className={styles.massageItemNumber}>3</div> */}
              <CiHeart />
              Виводіть токсини
            </div>
            <div className={styles.massageItem2Color}>
              {/* <div className={styles.massageItemNumber2Color}>4</div> */}
              <CiHeart />
              Зміцнює іммунітет та знижує вагу
            </div>
            <div className={styles.massageItem}>
              <CiHeart />
              {/* <div className={styles.massageItemNumber}>5</div> */}
              Дарує відчуття легкості в тілі
            </div>
          </div>
          <div className={styles.priceContainer}>
            <div>Ціна:</div> <div>від 900 грн.</div>
          </div>
        </div>
        <div className={styles.divider}></div>
        {/* антицеллюліт */}
        <div className={styles.faceMassageContainer}>
          <div className={styles.sectionTitle}>
            <div className={styles.titleLimfoTextWrapper}>
              <h1>
                Антицеллюлітні <br /> програми
              </h1>
              <h3>Виглядайте стрункішою</h3>
            </div>
            <div className={styles.faceMassageImageWrapper}>
              <img
                src={'https://res.cloudinary.com/dwxlzszxy/image/upload/v1718223975/massage-stomac_lf6gww.jpg'}
                alt='massage'
                width={600}
                height={500}
              />
            </div>
          </div>
          <div className={styles.massageItemContainer}>
            <div className={styles.massageItem}>
              {/* <div className={styles.massageItemNumber}>1</div> */}
              <CiHeart />
              Створює струнке, підтягнуте тіло
            </div>

            <div className={styles.massageItem2Color}>
              {/* <div className={styles.massageItemNumber2Color}>2</div> */}
              <CiHeart />
              Позбавляє від набряків
            </div>
            <div className={styles.massageItem}>
              {/* <div className={styles.massageItemNumber}>3</div> */}
              <CiHeart />
              Позбавляє від целлюліту
            </div>
            <div className={styles.massageItem2Color}>
              {/* <div className={styles.massageItemNumber}>3</div> */}
              <CiHeart />
              Створює плоский живіт
            </div>
            <div className={styles.massageItem}>
              {/* <div className={styles.massageItemNumber}>3</div> */}
              <CiHeart />
             Підтягнуті стегна та ягодиці
            </div>
          </div>
          <div className={styles.priceContainer}>
            <div>Ціна:</div> <div>від 700 грн.</div>
          </div>
        </div>
      </section>
      <section className={styles.mastersSection}>
        <div className={styles.sectionTitle}>
          <h1>Наші майстри</h1>
        </div>
        <div className={styles.mastersContainer}>
          Наші майстри мають більше п&apos;яти років досвіду. Є кваліфікованими
          спеціалістами з масажу тіла та обличчя. Постійно підвищують кваліфікацію.{' '}
        </div>
      </section>

      <section className={styles.ourSalonSection}>
        <div className={styles.sectionTitle}>
          <h1>Наш салон</h1>
        </div>
        <div className={styles.salonPhotosContainer}>
          <img
            src={'https://res.cloudinary.com/dwxlzszxy/image/upload/v1718224146/salon-entrance_i47ogs.jpg'}
            alt='massage'
            width={600}
            height={500}
          />
            <img
            src={'https://res.cloudinary.com/dwxlzszxy/image/upload/v1718224144/salon-room_pruyop.jpg'}
            alt='massage'
            width={600}
            height={500}
          />
            <img
            src={'https://res.cloudinary.com/dwxlzszxy/image/upload/v1718224144/salon-room-2_szmlov.jpg'}
            alt='massage'
            width={600}
            height={500}
          />
            <img
            src={'https://res.cloudinary.com/dwxlzszxy/image/upload/v1718224145/salon-reception_jcjxkp.jpg'}
            alt='massage'
            width={600}
            height={500}
          />
          
        </div>
      </section>
      <section className={styles.locationSection}>
        <div className={styles.sectionTitle}>
          <h1>Як нас знайти</h1>
        </div>
        <div className={styles.adressContainer}>
          Салон One Shape розташований по вул. Гагаринське плато 5а, к2(2
          перлина)
        </div>
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

export default MassageArcadia;
