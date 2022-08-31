import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import styles from './Navbar.module.css'

export default function TNavbar({ title }) {
  return (
      <Navbar bg="light" style={{width: "100%"}}>
        <Container style={{flexDirection: "row", paddingLeft:"1"}}>
          <Navbar.Brand href="#home" className={styles.title}>{title}</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Plans</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}
