import Button from 'react-bootstrap/Button';

import styles from './Banner.module.css'

export default function Banner() {
  return(
    <div className={styles.backdrop}>
      <div className={styles.halfWidthDiv}>
        <div className={styles.heading}>
          Declutter Your Browser
        </div>
        <div className={styles.text}>
          Get rid of old and unused chrome tabs with a seemless tab management.
        </div>
        <div className={styles.twoBox}>
          <div style={{width: "240px"}}>
            <Button variant="dark" className={styles.button}>Download</Button>
          </div>
          <div style={{width: "240px"}}>
            <Button variant="outline-dark" className={styles.button}>Learn More</Button>
          </div>
        </div>
      </div>
      <div className={styles.halfWidthDiv}>
        <img src="/Home.png" style={{"width":"50%"}}/>
      </div>
    </div>
  )
}
