import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import FreePlan from './FreePlan.js';
import PaidPlan from './PaidPlan.js';

import styles from './Pricing.module.css'

export default function Pricing() {
  return(
    <div className={styles.backdrop} id="pricing">
      <div className={styles.header}>
        <div className={styles.heading}>
          Plans & Pricing
        </div>
        <div className={styles.text}>
          Switch your plans, anytime!
        </div>
      </div>
      <div className={styles.body}>
        <Row>
          <Col>
            <FreePlan/>
          </Col>
          <Col>
            <PaidPlan/>
          </Col>
        </Row>
      </div>
    </div>
  )
}
