import React from 'react';
import styles from './SectionFeedback.module.css';
import Image from 'next/image';

interface Props {
  feedbacksData: {
   image: string; 
  }[];
}

const SectionFeedback = ({ feedbacksData }: Props) => {
  return (
    <section className={styles.sectionFeedback}>
      <div className={styles.titleFeedbackSection}>Відгуки</div>
      <div className={styles.feedbacksContainer}>
        {/* <div className={styles.feedbackPhoto}></div> */}
        {feedbacksData.map(({ image }) => (
          <div className={styles.feedbackWrapper}>
            <div className={styles.feedbackPhoto}>
              <Image src={image} width={500} height={500} alt="feedback" />
              </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionFeedback;
