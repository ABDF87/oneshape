import React from 'react'
import styles from './MassageCoursesBanner.module.css'
import Link from 'next/link'

const MassageCoursesBanner = () => {
  return (
    <section className={styles.goToCoursesSection}>
    <div className={styles.goToCoursesLayer}></div>
    <div className={styles.goToCoursesContainer}>
      <div className={styles.goToCoursesTitle}>
        Хочеш стати майстром з массажу?
      </div>
      <div className={styles.goToCoursesDescription}>
        Навчайся у нашого топ-майстра та отримуй високооплачувану
        професію
      </div>
      <div className={styles.goToCoursesButton}>
        <Link href='/courses/massage'>подивитися программи курсів</Link>
      </div>
    </div>
  </section>
  )
}

export default MassageCoursesBanner