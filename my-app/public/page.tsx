"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import logo from './logo.png';
import { Container, Navbar, Nav, NavDropdown, Row, Col, Button, Image } from 'react-bootstrap';
import { Instagram, Facebook, Twitter, Tiktok, Cart } from 'react-bootstrap-icons';

const TopMenu = () => (
  <Navbar variant='light' bg='light'>
    <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Image src={'./logo.png'} alt="Logo"/></Nav.Link>
          </Nav>
          <Nav className="justify-content-end"> 
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Banyans Menu</Nav.Link>
            <Nav.Link>Reservations</Nav.Link>
            <Nav.Link>Events</Nav.Link>
            <Nav.Link>Gift Cards</Nav.Link>
            <Nav.Link><Instagram/></Nav.Link>
            <Nav.Link><Facebook/></Nav.Link>
            <Nav.Link><Twitter/></Nav.Link>
            <Nav.Link><Tiktok/></Nav.Link>    
            <NavDropdown>
              <NavDropdown.Item href="link">Yo</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>En</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Container>
  </Navbar>
);

const MiddleMenu = () => (
  <Container id="centerText" className="align-items-center justify-content-center text-center">
            <h1>GLOBALLY INSPIRED, LOCALLY</h1>
            <h1>SOURCED</h1>
            <h3>KAILUA&#x27;S CRAFT KITCHEN AND LOUNGE</h3>
            <h5>Live Music Fridays and Saturdays</h5>
  </Container>
);

const FooterMenu = () => (
  <footer  id="bottomMenu" className="footer mt-auto py-3">
  <Container>
    <Row>
      <Col><h3>LOCATION</h3><strong>KAILUA</strong><br />32 Malinu Ave,<br />Kailua, HI 96734<br />(808) 261-6733<br /></Col>
      <Col></Col>
      <Col>
      <h3>BUSINESS HOURS</h3>
        <Row>
          <Col><strong>Mondays, Wednesdays, Thursdays</strong><br />OPEN 4pm - 10pm<br />Happy
                            Hour
                            4pm - 6pm<br />Dinner 4pm - 9pm<br /><strong>Fridays</strong><br />OPEN 4pm -
                            11pm<br />Happy Hour
                            4pm - 6pm<br />Dinner 4pm - 10pm<br /></Col>
          <Col><h5>Saturdays</h5>OPEN 9am - 11pm<br />Brunch 9am - 1pm<br />Happy Hour 4pm -
                            6pm<br />Dinner 4pm - 10pm<br /></Col>
        </Row>
      </Col>
      <Col></Col>
      <Col className="justify-content-center col-3">
        <h3>SUBSCRIBE</h3><input type="text" placeholder="First Name" /><input type="text"
                        placeholder="Last Name" /><input type="text" placeholder="Email Address" /><br />
                    <Button className="btn btn-light">Sign Up</Button>
      </Col>

    </Row>
  </Container>
  </footer>
);

export default function Home() {
    return (
        <main>
            {/* <Container> */}
                <TopMenu />
                <MiddleMenu />
                <FooterMenu />
            {/* </Container> */}
        </main>
    );
}