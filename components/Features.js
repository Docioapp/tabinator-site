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
          <img src="/Duplicates.png"/>
        </div>
        <div className={styles.topRight}>
          <div style={{"width": "75%"}}>
            <h2>Duplicate Tabs</h2>
            <div className={styles.text}>
              There are at least 10 sites which one browses on daily basis which ultimately end stacking up into a pile of un-used tabs.
            </div>
            <br/>
            <div className={styles.text}>
              With tabinator one can easily terminate them with a single click.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.bottomLeft}>
          <div style={{"width": "75%"}}>
            <h2>Old & Unused Tabs</h2>
            <div className={styles.text}>
              Every day we browse many tabs which end up as ‍to be <i>read....‍</i>
              <br/><br/>
              Keep track of old tabs, close or bookmark them with ease.
            </div>
          </div>
        </div>
        <div className={styles.bottomRight}>
          <img src="/OldTabs.png"/>
        </div>
      </div>
    </div>
  )
}
