import React from 'react';
import styles from './MastersSection.module.css';
import Image from 'next/image';
import { FaRegStar } from 'react-icons/fa';

type MastersSectionProps = {
  mastersData: {
    name: string;
    rank: string;
    experience: string;
    description: string;
    photo: string;
  }[];
};

const MastersSection = ({ mastersData }: MastersSectionProps) => {
  return (
    <section className={styles.mastersSection}>
      <div className={styles.titleMasters}>Hаші майстри</div>
      <div className={styles.mastersContainer}>
        {/* {mastersData.map(({ name, rank, experience, description, photo }) => ( */}
        <div className={styles.masterContainer}>
          <div className={styles.masterLayer}></div>
          <div className={styles.masterPhoto}>
            <Image
              src={'/photos/masters/master-portfolio-Tanya.jpg'}
              alt='massage'
              width={500}
              height={500}
            />
            <div className={styles.masterRank}>
              {/* <FaRegStar /> */}
              <span>топ-майстер</span>
            </div>
          </div>
          <div className={styles.masterDescriptionContainer}>
            <div className={styles.masterNameWrapper}>
              <div className={styles.masterName}>{'Тетяна Склема'}</div>
            </div>
            <div className={styles.masterDescription}>
              <div>Досвід: 10 років</div>
              <div>Топ-майстер масажу, ГУРУ тейпування.</div>
              <div>4 роки викладацької діяльності</div>
              <br />
            </div>
            <div className={styles.massageList}>
              <div style={{ marginBottom: '5px', fontSize: '18px' }}>
                Виконує такі види масажу:
              </div>

              <ul>
                <li>Оздоровчий</li>
                <li>Тайський</li>
                <li>Лімфодренажний</li>
                <li>Фітнес-моделюючий</li>
                <li>Спортивний</li>
                <li>Антицелюлітний</li>
                <li>Масаж для вагітних</li>
                <li>Масаж обличчя</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.masterContainer}>
          <div className={styles.masterLayer}></div>
          <div className={styles.masterPhoto}>
            <Image
              src={'/photos/massage-master-2.jpg'}
              alt='massage'
              width={500}
              height={500}
            />
            <div className={styles.masterRank}>
              {/* <FaRegStar /> */}
              <span>майстер</span>
            </div>
          </div>
          <div className={styles.masterDescriptionContainer}>
            <div className={styles.masterNameWrapper}>
              <div className={styles.masterName}>Афанасьєва Єлизавета</div>
            </div>
            <div className={styles.masterDescription}>
              <div>Досвід: 2 роки</div>
              <div>Майстер масажу, має медичну освіту</div>
              <br />
            </div>
            <div className={styles.massageList}>
              <div style={{ marginBottom: '5px', fontSize: '18px' }}>
                Виконує такі види масажу:
              </div>

              <ul>
                <li>Оздоровчий</li>
                <li>Класичний</li>
                <li>Лімфодренажний</li>
                <li>Фітнес-моделюючий</li>
                <li>Спортивний</li>
                <li>Антицелюлітний</li>
                <li>Масаж обличчя</li>
              </ul>
            </div>
          </div>
        </div>
        {/* ))} */}
      </div>
    </section>
  );
};

export default MastersSection;
