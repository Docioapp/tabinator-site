import Button from 'react-bootstrap/Button';

import styles from './Plan.module.css'

export default function FreePlan() {
  return(
    <div className={styles.card}>
      <div style={{"margin": "8%"}}>
        <h4>
          Pro
        </h4>
        <div className={styles.boldBlue}>
          $5
        </div>
        <div>
          <span className={styles.boldBlue}> &#8734; </span>
          <span style={{"fontSize": "14px"}}> Duplicate URLs </span>
        </div>
        <div>
          <span className={styles.boldBlue}> &#8734; </span>
          <span style={{"fontSize": "14px"}}> Days old tabs only </span>
        </div>

        <div style={
          {
            "width": "100px",
            "height": "1px",
            "backgroundColor": "#dbdbdb",
            "marginTop": "16px",
            "marginBottom": "16px"
          }
        } />

        <div className={styles.text}><b>Close All</b> Duplicate Tabs</div>
        <div className={styles.text}><b>Close All</b> Old Tabs</div>
        <div className={styles.text}><b>Upadates</b></div>
        <Button variant="dark" className={styles.button}>Coming Soon</Button>
      </div>
    </div>
  )
}
