import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'

import styles from './Banner.module.css'

export default function Banner() {
  return(
    <Container>
      <Row className={styles.backdrop}>
        <Col className={styles.halfWidthDiv} md={5}>
          <Row className={styles.heading}>
            Declutter Your Browser
          </Row>
          <Row className={styles.text}>
            Get rid of old and unused chrome tabs with a seemless tab management.
          </Row>
          <Row style={{"marginTop": "16px"}}>
            <Col>
              <a href="#pricing"><Button variant="dark" className={styles.button}>Download</Button></a>
            </Col>
            <Col>
              <a href="#features"><Button variant="outline-dark" className={styles.button}>Learn More</Button></a>
            </Col>
          </Row>
        </Col>
        <Col className={styles.halfWidthDiv}
        style={{"alignItems": "center"}} md={5}>
          <Image src="/Home.png" className={styles.snippet} />
        </Col>
      </Row>
    </Container>
  )
}
