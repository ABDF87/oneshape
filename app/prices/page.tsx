'use client';
import React, { useState, useRef } from 'react';
import styles from './Prices.module.css';
import Header from '@/components/header/Header';
import Image from 'next/image';
import massagePackagePrices from '@/data/massage_package_prices';
import massageBodyPrices from '@/data/massage_body_prices';
import massageFacePrices from '@/data/massage_face_prices';
import manicureTopMasterPrices from '@/data/manicure_top_prices';
import MassagePrices from '@/components/massagePrices/MassagePrices';
import ManicurePrices from '@/components/manicurePrices/ManicurePrices';
import { IoMdRemoveCircleOutline } from 'react-icons/io';
import { GiCheckMark } from 'react-icons/gi';
import Contact from '@/components/contact/Contact';
import { useFormContext } from '@/components/formContextProvider/FormContextProvider';
import BookOnlineModal from '@/components/bookOnlineModal/BookOnlineModal';

interface MassagePrice {
  type: string;
  name: string;
  description: string;
  description2?: string;
  description3?: string;
  duration: string;
  price: string;
}

interface SelectedService {
  type: string;
  name: string;
  price: string;
}

interface ManicurePrice {
  type: string;
  name: string;
  description: string;
  description2?: string;
  description3?: string;
  price: string;
}

const Prices = () => {
  const [selectedServices, setSelectedServices] = useState<SelectedService[]>(
    []
  );
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [isFormSent, setIsFormSent] = useState<boolean>(false);
  const dataMassagePackagePrices: MassagePrice[] = massagePackagePrices;
  const dataMassageSessionPrices: MassagePrice[] = massageBodyPrices;
  const dataMassageFacePrices: MassagePrice[] = massageFacePrices;
  const dataManicureTopMasterPrices: ManicurePrice[] = manicureTopMasterPrices;

  const selectServiceHandler = (
    serviceType: string,
    serviceName: string,
    servicePrice: string
  ) => {
  
    setIsFormSent(false);
    const newService = {
      type: serviceType,
      name: serviceName,
      price: servicePrice,
    };
    setSelectedServices([...selectedServices, newService]);
    setTotalPrice(totalPrice + Number(servicePrice));
  };
  const { isModalOpen, setIsModalOpen, setFormInfo } = useFormContext();


  const deleteSelectedServiceHandler = (index: number) => {
    const newSelectedServices = [...selectedServices];
    setTotalPrice(totalPrice - Number(newSelectedServices[index].price));
    newSelectedServices.splice(index, 1);
    setSelectedServices(newSelectedServices);
  };

  const selectMoreHandler = () => {
    setIsFormSent(false);
  };

  const component1Ref = useRef(null);
  const component2Ref = useRef(null);
  const component3Ref = useRef(null);
  const component4Ref = useRef(null);

  const scrollToComponent = (ref: any) => {
    ref.current.scrollIntoView({
      behavior: 'smooth',
    });
  };

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
        <div className={styles.titleContainer}>Ціни на послуги </div>
        <div className={styles.navButtonsContainer}>
          <div className={styles.navInnerWrapper}>
            <div
              className={styles.navButton}
              onClick={() => scrollToComponent(component1Ref)}
            >
              МАСАЖ АБОНЕМЕНТИ
            </div>
            <div
              className={styles.navButton}
              onClick={() => scrollToComponent(component2Ref)}
            >
              МАСАЖ ТІЛА
            </div>
            <div
              className={styles.navButton}
              onClick={() => scrollToComponent(component3Ref)}
            >
              МАСАЖ ОБЛИЧЧЯ
            </div>

            <div
              className={styles.navButton}
              onClick={() => scrollToComponent(component4Ref)}
            >
              МАНІКЮР ВІД ТОП МАСТЕРА
            </div>
          </div>
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.priceTablesContainer}>
            <div className={styles.tablePriceElement} ref={component1Ref}>
              <MassagePrices
                dataMassagePrices={dataMassagePackagePrices}
                selectServiceHandler={selectServiceHandler}
                tableTitle='МАСАЖ АБОНЕМЕНТИ'
              />
            </div>
            <div className={styles.tablePriceElement} ref={component2Ref}>
              <MassagePrices
                dataMassagePrices={dataMassageSessionPrices}
                selectServiceHandler={selectServiceHandler}
                tableTitle='МАСАЖ ТІЛА'
              />
            </div>
            <div className={styles.tablePriceElement} ref={component3Ref}>
              <MassagePrices
                dataMassagePrices={dataMassageFacePrices}
                selectServiceHandler={selectServiceHandler}
                tableTitle='МАСАЖ ОБЛИЧЧЯ'
              />
            </div>
            <div className={styles.tablePriceElement} ref={component4Ref}>
              <ManicurePrices
                dataManicurePrices={dataManicureTopMasterPrices}
                selectServiceHandler={selectServiceHandler}
                tableTitle='МАНІКЮР ВІД ТОП МАСТЕРА'
              />
            </div>
          </div>
          <div className={styles.formContainer}>
            {!isFormSent && (
              <form>
                <div className={styles.formWrapper}>
                  <div className={styles.formTitle}>ЗАПИС</div>
                  <input
                    className={styles.formInput}
                    placeholder='Ім’я'
                    required
                  />
                  <input
                    className={styles.formInput}
                    placeholder='Телефон'
                    required
                  />
                  {selectedServices.length > 0 ? (
                    <div className={styles.selectedServicesContainer}>
                      <div className={styles.selectedServicesTitle}>
                        Обрані послуги:
                      </div>
                      {selectedServices.map((service, index) => {
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
                                onClick={() =>
                                  deleteSelectedServiceHandler(index)
                                }
                              >
                                <IoMdRemoveCircleOutline />
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className={styles.callToSelectServices}>
                      {' '}
                      додайте послуги зі списку{' '}
                    </div>
                  )}
                </div>
                <div className={styles.formButtonWrapper}>
                  <div className={styles.formButton}>Замовити</div>
                  <div className={styles.formTotalPrice}>{totalPrice} грн.</div>
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
                  В найближчий час з Вами зв’яжеться адміністратор для
                  підтвердження запису.
                </div>
                <div
                  className={styles.selectMoreButton}
                  onClick={selectMoreHandler}
                >
                  Обрати ще послуги
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* <Contact /> */}
      </>
        )}
    </main>
  );
};

export default Prices;
