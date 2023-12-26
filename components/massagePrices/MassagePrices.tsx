import React from 'react';
import styles from './MassagePrices.module.css';

interface Props {
  dataMassagePrices: {
    type: string;
    name: string;
    description: string;
    description2?: string;
    description3?: string;
    duration: string;
    price: string;
  }[];
  selectServiceHandler: (type: string, name: string, price: string) => void;
    tableTitle: string;

}

const massagePrices = ({
  dataMassagePrices,
  selectServiceHandler,
  tableTitle,
}: Props) => {
  return (
    <div className={styles.massageContainer}>
      <div className={styles.layerMassageContainer}> </div>

      <div className={styles.massagePriceTitleContainer}>
        <div className={styles.massageTitleWrapper}>
          {/* <div className={styles.massagePriceTitle}>PRICE LIST</div> */}
          <div className={styles.massagePriceSubTitle}>
           {tableTitle}
            <span></span>
          </div>
        </div>
      </div>
      <div className={styles.massagePriceColumnTitlesСontainer}>
        <div className={styles.massagePriceColumnTitleWrpapper}>
          <div className={styles.massagePriceColumnTitleTime}>
            Час одного сеансу
          </div>
          <div className={styles.massagePriceColumnTitlePrice}>Ціна</div>
        </div>
      </div>
      <div className={styles.pricesContainer}>
        {dataMassagePrices.map(
          ({
            type,
            name,
            description,
            description2,
            description3,
            duration,
            price,
          }) => {
            return (
              <div
                className={styles.priceItem}
                onClick={() => selectServiceHandler(type, name, price)}
              >
                <div className={styles.priceItemTextWrapper}>
                  <div className={styles.priceItemTitle}>{name}</div>
                  <div className={styles.priceItemDescription}>
                    {description}
                  </div>
                  {description2 && (
                    <div className={styles.priceItemDescription}>
                      {description2}
                    </div>
                  )}
                  {description3 && (
                    <div className={styles.priceItemDescription}>
                      {description3}
                    </div>
                  )}
                </div>
                <div className={styles.priceItemTime}>{duration}</div>

                <div className={styles.priceItemPriceWrapper}>{price} грн.</div>
              </div>
            );
          }
        )}
      </div>
      <div className={styles.manicurePricesTable}></div>
    </div>
  );
};

export default massagePrices;
