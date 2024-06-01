import React from 'react';
import styles from './SectionCourses.module.css';
import SectionFeedback from '../section_feedback/SectionFeedback';
import { FaPeoplePulling } from 'react-icons/fa6';
import { FiClock } from 'react-icons/fi';
import { LuCalendarClock } from 'react-icons/lu';
import { TbFileCertificate } from 'react-icons/tb';
import { PiStudent } from "react-icons/pi";

import { TiStar } from 'react-icons/ti';
import Image from 'next/image';
import BookOnlineButton from '@/components/bookOnlineButton/BookOnlineButton';
import { useFormContext } from '@/components/formContextProvider/FormContextProvider';
import massageCourseFeedback from '@/data/massage_course_feedbacks';

const SectionCourses = ({ courseData }: any) => {

  const { isModalOpen, setIsModalOpen, setFormInfo } = useFormContext();
  return (
    <main className={styles.mainContainer}>
      <div className={styles.innerContainer}>
      <div className={styles.courseConditionsDescription}>
      <div className={styles.courseConditionsDescriptionItem}>
            <div className={styles.courseConditionsDescriptionItemImage}>
            <PiStudent />

            </div>

            <div className={styles.courseConditionsDescriptionItemValue}>
              Навчайтесь в салоні One Shape в Одесі 
              <br />
            або онлайн
            </div>
          </div>
          <div className={styles.courseConditionsDescriptionItemHalfWrapper}>
          <div className={styles.courseConditionsDescriptionItemHalf}>
            <div className={styles.courseConditionsDescriptionItemImage}>
              <LuCalendarClock />
            </div>

            <div className={styles.courseConditionsDescriptionItemValue}>
              {courseData[0].details.friquency}
              <br />
              {courseData[0].details.friquencyComment}
            </div>
          </div>
          <div className={styles.courseConditionsDescriptionItemHalf}>
            <div className={styles.courseConditionsDescriptionItemImage}>
              <FiClock />
            </div>
            <div className={styles.courseConditionsDescriptionItemValue}>
              {courseData[0].details.duration}
              <br />
              {courseData[0].details.time}
            </div>
          </div>
          </div>
          <div className={styles.courseConditionsDescriptionItem}>
            <div className={styles.courseConditionsDescriptionItemImage}>
              <FaPeoplePulling />
            </div>
            <div className={styles.courseConditionsDescriptionItemValue}>
              {courseData[0].details.groupInfo}
              <br />
              {courseData[0].details.groupInfoComment}
            </div>
          </div>
          <div className={styles.courseConditionsDescriptionItem}>
            <div className={styles.courseConditionsDescriptionItemImage}>
              <TbFileCertificate />
            </div>
            <div className={styles.courseConditionsDescriptionItemValue}>
              {courseData[0].details.certificate}
            </div>
          </div>
        </div>
        <div className={styles.courseTitleContainer}>Наші курси</div>
        <div className={styles.courseContainerWrapper}>
          {courseData[0].courses.map((course: any) => (
            <div className={styles.courseContainer}>
              <div className={styles.backgroundImage}>
                <Image
                  src={course.backgroundImage}
                  alt='backgroundImage'
                  width={300}
                  height={300}
                />
              </div>
              <div className={styles.layer}></div>
              <div className={styles.bodyWrapper}>
                <div className={styles.courseTitle}>{course.title}</div>
                <div className={styles.courseSubTitleOne}>
                  {course.subTitle}
                </div>

                <div className={styles.courseSubTitle}>
                  {course.descriptionTitle}
                </div>

                <div className={styles.courseSubjectsList}>
                  <ul>
                    {course.descriptionOptions.map((item: any) => (
                      <li>
                        <div>
                          <TiStar className={styles.starIcon} />
                        </div>
                        {item}
                        <br />
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.courseComment}>{course?.comment}</div>
              </div>
              <div className={styles.orderWrapper}>
                {/* <div className={styles.coursePriceContainer}>
                  {course.price}
                </div> */}
                <br />
                <div className={styles.orderButtonContainer}>
                  <BookOnlineButton
                    text='ЗАМОВИТИ'
                    additionalFormInfo={{
                      service: 'Навчання ' + course.title,
                      master: '',
                    }}
                    setIsModalOpen={setIsModalOpen}
                    setFormInfo={setFormInfo}
                    customBackgroundColor='#eea03a'
                    color='#070707'
                    border='1px solid #eea03a'
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
     
        <div className={styles.sectionInstructor}>
          <div className={styles.sectionTitle}>Викладач курсу</div>
          <div className={styles.instructorContainer}>
            <div className={styles.instructorImage}>
              <Image
                alt='інструктор з масажу'
                src={courseData[0].instructor.image}
                width={300}
                height={300}
              />
            </div>
            <div className={styles.instructorDescriptionShadow}>
              <div className={styles.instructorDescription}>
                <div className={styles.layerInstructor}></div>
                <div className={styles.instructorName}>
                  {courseData[0].instructor.name}
                </div>
                <div className={styles.instructorInfo}>
                  {courseData[0].instructor.qualification}
                </div>
                <div className={styles.instructorInfo}>
                  {courseData[0].instructor.experience}
                </div>
                <div className={styles.instructorText}>
                  <p>{courseData[0].instructor.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* while manicure course is off pass massage feedbacks directly (not from courseData) */}
        <SectionFeedback feedbacksData={massageCourseFeedback} />
      </div>
    </main>
  );
};

export default SectionCourses;
