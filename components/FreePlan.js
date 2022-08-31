import Button from 'react-bootstrap/Button';

import styles from './Plan.module.css'

export default function FreePlan() {
  return(
    <div className={styles.card}>
      <div style={{"margin": "8%"}}>
        <h4>
          Free
        </h4>
        <div className={styles.boldBlue}>
          Free
        </div>
        <div>
          <span className={styles.boldBlue}> 3 </span>
          <span style={{"fontSize": "14px"}}> Duplicate URLs </span>
        </div>
        <div>
          <span className={styles.boldBlue}> 3 </span>
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

        <div className={styles.strikeText} >Close All Duplicate Tabs</div>
        <div className={styles.strikeText}>Close All Old Tabs</div>
        <div className={styles.strikeText}>Upadates</div>
        <Button variant="dark" className={styles.button}>Coming Soon</Button>
      </div>
    </div>
  )
}
