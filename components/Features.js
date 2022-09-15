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
                <Row className={styles.italic}>
                  With plethora of tabs, its often easier to open a new tab instead of searching one resulting in opening of duplicate tabs.
                </Row>
                <br/>
                <Row className={styles.text}>
                  List down all the duplicate tabs open in the browser. Close all duplicates with a single click.
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
              <Row className={styles.italic}>
                It maybe procastination or lack of time, do you tend to open tabs which are never closed for days or weeks?
              </Row>
              <br/>
              <Row>
                Keeps track of old tabs by calculating tab age. Older tabs are less likely to be browsed again.
              </Row>
            </Container>
          </Col>
          <Col md={6} className={styles.snippet}>
            <img src="/OldTabs.png"/>
          </Col>
        </Row>
      </Container>
      <Container className={styles.section}>
          <Row style={{"justifyContent": "center"}}>
            <Col md={5} className={styles.snippet}>
                <img src="/AllTabs.png"/>
            </Col>
            <Col md={5}>
              <Container style={{"width": "80%"}}>
                <Row className={styles.featureText}>
                  Grouped by Website
                </Row>
                <Row className={styles.italic}>
                  Tabs with same web host or belonging to the same website are grouped together.
                </Row>
                <br/>
                <Row className={styles.text}>
                  List down all the tabs grouped by website and provides a drill down view of all tabs belong to same website.
                </Row>
              </Container>
            </Col>
          </Row>
      </Container>
    </Container>
  )
}
