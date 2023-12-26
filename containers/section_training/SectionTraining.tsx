import React, { useContext } from 'react';
import styles from './SectionTraining.module.css';
import Image from 'next/image';
import AnchorButtons from '@/components/anchorButtons/AnchorButtons';
import { AnchorButtonContext } from '@/app/page';

const SectionTraining = () => {
  const context = useContext(AnchorButtonContext);
  if (!context) {
    throw new Error('AnchorButtonContext is null');
  }
  const { setIsModalOpen } = context;
  return (
    <section className={styles.mainContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.imageContainer}>
          <Image
            src='/photos/training-landing.jpg'
            alt='section_training'
            width={500}
            height={500}
          />
        </div>
        <div className={styles.descriptionContainer}></div>
      </div>
      <div className={styles.layer}>
        <div className={styles.titleContainer}>
          <div className={styles.title}>Навчання</div>
          <div className={styles.description}>
            Навчайтесь в найкращіх спеціалістів
          </div>
          <div className={styles.description}>А тут другий</div>
        </div>
        <div className={styles.buttonsContainer}>
          <AnchorButtons
            customFlexDirection={'row'}
            customColor={'black'}
            setIsModalOpen={setIsModalOpen}
          />
        </div>
      </div>
    </section>
  );
};

export default SectionTraining;
