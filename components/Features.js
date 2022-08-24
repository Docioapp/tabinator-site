import styles from './Features.module.css'

export default function Features() {
  return(
    <div className={styles.main}>
      <div className={styles.fheader}>
        <div className={styles.heading}>Adopt The Habit of Tab Hygiene</div>
        <div className={styles.subHeading}>Boost efficiency, RAM & <b>save time</b>!</div>
      </div>
      <div className={styles.section}>
        <div className={styles.topLeft}>
          T1
        </div>
        <div className={styles.topRight}>
          T2
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.bottomLeft}>
          B1
        </div>
        <div className={styles.bottomRight}>
          B2
        </div>
      </div>
    </div>
  )
}
