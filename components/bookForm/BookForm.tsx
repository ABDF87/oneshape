import React, { useState, useEffect, useRef, use } from 'react';
import axios from 'axios';
import styles from './BookForm.module.css';
import { IoMdRemoveCircleOutline } from 'react-icons/io';
import { GiCheckMark } from 'react-icons/gi';
import { useFormContext } from '../formContextProvider/FormContextProvider';
import { useRouter } from 'next/navigation';
import emailjs from '@emailjs/browser';
import { usePathname } from 'next/navigation';
import { act } from 'react-dom/test-utils';

interface Props {
  selectedServices?: any;
  setSelectedServices?: any;
  deleteSelectedServiceHandler?: any;
  totalPrice?: number;
  serviceType?: string;
}

const BookForm = ({
  setSelectedServices,
  selectedServices,
  deleteSelectedServiceHandler,
  totalPrice,
}: Props) => {
  const { formInfo, setFormInfo } = useFormContext();

  const [formSent, setFormSent] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState<string>('');
  const [activeMessage, setActiveMessage] = useState<string>('');
  const [callToPickService, setCallToPickService] = useState(true);

  const form: any = useRef();
  const path = usePathname();
  console.log('path', path);

  // set formInfo.service to message
  useEffect(() => {
    if (formInfo && formInfo.service) {
      setMessage(formInfo.service);
    }
  }, [formInfo]);

  //manage calltopickservice on price page
  useEffect(() => {
    if (path === '/prices') {
      setCallToPickService(false);
    } else {
      setCallToPickService(true);
    }
  }, [path]);

  //remove calltopickservice if service is selected
  useEffect(() => {
    if (selectedServices?.length > 0) {
      setCallToPickService(false);
    }
  }, [selectedServices]);

  // set selected services to message
  useEffect(() => {
    selectedServices?.map((service: any) => {
      setMessage(
        () => activeMessage + service.name + ' ' + service.price + ' грн' + '\n'
      );
    });
    console.log('message', message);
  }, [selectedServices]);

  useEffect(() => {
    setActiveMessage(message);
  }, [message]);

  const selectMoreHandler = () => {
    setFormSent(false);
  };

  const formData = {
    service_id: 'service_shape',
    template_id: 'template-shape-form1',
    user_id: 'Tvjqo-2HvVtUE0Nei',
    template_params: {
      client_name: name,
      client_phone: phone,
      message: activeMessage,
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
        setMessage('');
        setActiveMessage('');
        setSelectedServices([]);
        if (setFormInfo && formInfo?.service) {
          setFormInfo({ master: '', service: '' });
        }
      })
      .catch((error: any) => {
        console.log('error', error);
      });
  };

  console.log('callToPickService', callToPickService);
  console.log('activeMessage', activeMessage);
  return (
    <>
      {!formSent ? (
        <form className={styles.form} onSubmit={sendEmail} ref={form}>
          <div className={styles.formTitle}> ONLINE ЗАПИС</div>

          <div className={styles.formWrapper}>
            <input
              type='text'
              className={styles.formInput}
              name='client_name'
              placeholder='Ім’я'
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
            <input
              type='phone'
              className={styles.formInput}
              placeholder='Телефон'
              name='client_phone'
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              required
            />

            {formInfo && formInfo.service && (
              <input
                readOnly
                style={{ backgroundColor: 'transparent' }}
                name='message'
                value={'Послуга:' + formInfo.service.toLowerCase()}
              />
            )}
            {selectedServices && selectedServices.length > 0 ? (
              <div className={styles.selectedServicesContainer}>
                <div className={styles.selectedServicesTitle}>
                  Обрані послуги:
                </div>
                {selectedServices.map((service: any, index: any) => {
                  return (
                    <div className={styles.selectedService} key={index}>
                      <div className={styles.selectedTitleWrapper}>
                        <span>{service.type}:&nbsp;</span>
                        <span>{service.name}</span>
                      </div>
                      <div className={styles.selectedPriceWrapper}>
                        <span>{service.price} грн.</span>
                        <span
                          className={styles.deleteSelectedServiceButton}
                          onClick={() => deleteSelectedServiceHandler(index)}
                        >
                          <IoMdRemoveCircleOutline />
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              !callToPickService && (
                <div className={styles.callToSelectServices}>
                  {' '}
                  додайте послуги зі списку{' '}
                </div>
              )
            )}
          </div>
          <div className={styles.formButtonWrapper}>
            <button type='submit' className={styles.formButton}>
              Замовити
            </button>
            {selectedServices && selectedServices.length > 0 && (
              <div className={styles.formTotalPrice}>{totalPrice} грн.</div>
            )}
          </div>
        </form>
      ) : (
        <div className={styles.formInfo}>
          <div className={styles.formInfoTitle}>
            <GiCheckMark />
            Заявка відправлена.
          </div>
          <div className={styles.formInfoDescription}>
            В найближчий час з Вами зв’яжеться адміністратор для підтвердження
            запису.
          </div>
          {path === '/prices' && (
            <div
              className={styles.selectMoreButton}
              onClick={selectMoreHandler}
            >
              Обрати ще послуги
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default BookForm;
