import FreePlan from './FreePlan.js';
import PaidPlan from './PaidPlan.js';

import styles from './Pricing.module.css'

export default function Pricing() {
  return(
    <div className={styles.backdrop}>
      <div className={styles.header}>
        <div className={styles.heading}>
          Plans & Pricing
        </div>
        <div className={styles.text}>
          Switch your plans, anytime!
        </div>
      </div>
      <div className={styles.body}>
        <FreePlan/>
        <PaidPlan/>
      </div>
    </div>
  )
}
