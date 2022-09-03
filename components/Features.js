import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styles from './Features.module.css'

export default function Features() {
  return(
    <Container style={{"marginBottom": "48px"}} id="features">
      <Row className={styles.fheader}>
        <Col md={12} className={styles.headerCol}>
        <Row className={styles.heading}>Adopt The Habit of Tab Hygiene</Row>
        <Row className={styles.subHeading}>Boost efficiency, RAM & save time!</Row>
        </Col>
      </Row>
      <Container className={styles.section}>
          <Row style={{"justifyContent": "center"}}>
            <Col md={5} className={styles.snippet}>
                <img src="/Duplicates.png"/>
            </Col>
            <Col md={5}>
              <Container style={{"width": "80%"}}>
                <Row className={styles.featureText}>
                  Duplicate Tabs
                </Row>
                <Row className={styles.text}>
                  There are at least 10 sites which one browses on daily basis which ultimately end stacking up into a pile of un-used tabs.
                </Row>
                <br/>
                <Row className={styles.text}>
                  With are at least 10 sites which one browses on daily basis which ultimately end stacking up into a pile of un-used tabs.
                </Row>
              </Container>
            </Col>
          </Row>
      </Container>
      <Container className={styles.section}>
        <Row style={{"justifyContent": "center"}}>
          <Col md={6}>
            <Container style={{"width": "80%"}}>
              <Row className={styles.featureText}>Old & Unused Tabs</Row>
              <Row className={styles.text}>
                Every day we browse many tabs which end up as ‍to be read....‍
                <br/>
                Keep track of old tabs, close or bookmark them with ease.
              </Row>
            </Container>
          </Col>
          <Col md={6} className={styles.snippet}>
            <img src="/OldTabs.png"/>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
