import React, { useState, useEffect, use } from 'react';
import styles from './BookForm.module.css';
import { IoMdRemoveCircleOutline } from 'react-icons/io';
import { GiCheckMark } from 'react-icons/gi';
import { useFormContext } from '../formContextProvider/FormContextProvider';

interface Props {
  isFormSent: boolean;
  selectedServices?: any;
  deleteSelectedServiceHandler?: any;
  totalPrice?: number;
  selectMoreHandler?: any;
  serviceType?: string;
}

const BookForm = ({
  isFormSent,
  selectedServices,
  deleteSelectedServiceHandler,
  totalPrice,
  selectMoreHandler,
}: Props) => {
  const { formInfo } = useFormContext();
  useEffect(() => {
    console.log('formInfo', formInfo);
  }, [formInfo]);

  return (
    <>
      {!isFormSent && (
        <form className={styles.form}>
          <div className={styles.formTitle}> ONLINE ЗАПИС</div>

          <div className={styles.formWrapper}>
            <input className={styles.formInput} placeholder='Ім’я' required />
            <input
              className={styles.formInput}
              placeholder='Телефон'
              required
            />
            {formInfo && formInfo.service && (
              <div className={styles.addedOption}>
                Послуга: {formInfo.service.toLowerCase()}
              </div>
            )}

            {selectedServices && selectedServices.length > 0 && (
              <div className={styles.selectedServicesContainer}>
                <div className={styles.selectedServicesTitle}>
                  Обрані послуги:
                </div>
                {selectedServices.map((service: any, index: any) => {
                  return (
                    <div className={styles.selectedService}>
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
            )}
          </div>
          <div className={styles.formButtonWrapper}>
            <div className={styles.formButton}>Замовити</div>
            {selectedServices && selectedServices.length > 0 && (
              <div className={styles.formTotalPrice}>{totalPrice} грн.</div>
            )}
          </div>
        </form>
      )}
      {isFormSent && (
        <div className={styles.formInfo}>
          <div className={styles.formInfoTitle}>
            <GiCheckMark />
            Заявка відправлена.
          </div>
          <div className={styles.formInfoDescription}>
            В найближчий час з Вами зв’яжеться адміністратор для підтвердження
            запису.
          </div>
          <div className={styles.selectMoreButton} onClick={selectMoreHandler}>
            Обрати ще послуги
          </div>
        </div>
      )}
    </>
  );
};

export default BookForm;
