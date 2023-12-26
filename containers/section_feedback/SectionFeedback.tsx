import React from 'react';
import styles from './SectionFeedback.module.css';

interface Props {
  feedbacksData: {
    name: string;
    feedback: string;
  }[];
}

const SectionFeedback = ({ feedbacksData }: Props) => {
  return (
    <section className={styles.sectionFeedback}>
      <div className={styles.titleFeedbackSection}>Відгуки</div>
      <div className={styles.feedbacksContainer}>
        {/* <div className={styles.feedbackPhoto}></div> */}
        {feedbacksData.map(({ name, feedback }) => (
          <div className={styles.feedbackWrapper}>
            <div className={styles.feedbackLayer}>
              <div className={styles.feedbackDescription}>" {feedback} "</div>
            </div>

            <div className={styles.feedbackDescriptionName}>
              <span>{name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionFeedback;
