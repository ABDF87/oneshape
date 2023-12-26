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
      <div className={styles.masterLayer}></div>
      <div className={styles.titleMasters}>Hаші майстри</div>
      <div className={styles.mastersContainer}>
        {mastersData.map(({ name, rank, experience, description, photo }) => (
          <div className={styles.masterContainer}>
            <div className={styles.masterPhoto}>
              <Image src={photo} alt='massage' width={500} height={500} />
              <div className={styles.masterRank}>
                {/* <FaRegStar /> */}
                <span>{rank}</span>
              </div>
            </div>
            <div className={styles.masterDescriptionContainer}>
              <div className={styles.masterNameWrapper}>
                <div className={styles.masterName}>{name}</div>
              </div>{' '}
              <div className={styles.masterDescription}>
                <ul>
                  <li>{experience}</li>
                  <li>{description}</li>
                </ul>
              </div>
              {/* <div className={styles.bookMasterButtonWrapper}>
                <div className={styles.bookMasterButton}>
                  записатись
                </div>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MastersSection;
