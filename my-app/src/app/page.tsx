// "use client";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './style.css';
// import logo from './logo.png';
// import { Container, Navbar, Nav, NavDropdown, Row, Col, Button, Image } from 'react-bootstrap';
// import { Instagram, Facebook, Twitter, Tiktok, Cart } from 'react-bootstrap-icons';

// const TopMenu = () => (
//   <Navbar variant='light' bg='light'>
//     <Container>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link><Image src={'./logo.png'} alt="Logo"/></Nav.Link>
//           </Nav>
//           <Nav className="justify-content-end"> 
//             <Nav.Link>Home</Nav.Link>
//             <Nav.Link>Banyans Menu</Nav.Link>
//             <Nav.Link>Reservations</Nav.Link>
//             <Nav.Link>Events</Nav.Link>
//             <Nav.Link>Gift Cards</Nav.Link>
//             <Nav.Link><Instagram/></Nav.Link>
//             <Nav.Link><Facebook/></Nav.Link>
//             <Nav.Link><Twitter/></Nav.Link>
//             <Nav.Link><Tiktok/></Nav.Link>    
//             <NavDropdown>
//               <NavDropdown.Item href="link">Yo</NavDropdown.Item>
//             </NavDropdown>
//             <Nav.Link>En</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//     </Container>
//   </Navbar>
// );

// const MiddleMenu = () => (
//   <Container id="centerText" className="align-items-center justify-content-center text-center">
//             <h1>GLOBALLY INSPIRED, LOCALLY</h1>
//             <h1>SOURCED</h1>
//             <h3>KAILUA&#x27;S CRAFT KITCHEN AND LOUNGE</h3>
//             <h5>Live Music Fridays and Saturdays</h5>
//   </Container>
// );

// const FooterMenu = () => (
//   <footer  id="bottomMenu" className="footer mt-auto py-3">
//   <Container>
//     <Row>
//       <Col><h3>LOCATION</h3><strong>KAILUA</strong><br />32 Malinu Ave,<br />Kailua, HI 96734<br />(808) 261-6733<br /></Col>
//       <Col></Col>
//       <Col>
//       <h3>BUSINESS HOURS</h3>
//         <Row>
//           <Col><strong>Mondays, Wednesdays, Thursdays</strong><br />OPEN 4pm - 10pm<br />Happy
//                             Hour
//                             4pm - 6pm<br />Dinner 4pm - 9pm<br /><strong>Fridays</strong><br />OPEN 4pm -
//                             11pm<br />Happy Hour
//                             4pm - 6pm<br />Dinner 4pm - 10pm<br /></Col>
//           <Col><h5>Saturdays</h5>OPEN 9am - 11pm<br />Brunch 9am - 1pm<br />Happy Hour 4pm -
//                             6pm<br />Dinner 4pm - 10pm<br /></Col>
//         </Row>
//       </Col>
//       <Col></Col>
//       <Col className="justify-content-center col-3">
//         <h3>SUBSCRIBE</h3><input type="text" placeholder="First Name" /><input type="text"
//                         placeholder="Last Name" /><input type="text" placeholder="Email Address" /><br />
//                     <Button className="btn btn-light">Sign Up</Button>
//       </Col>

//     </Row>
//   </Container>
//   </footer>
// );

// export default function Home() {
//     return (
//         <main>
//             {/* <Container> */}
//                 <TopMenu />
//                 <MiddleMenu />
//                 <FooterMenu />
//             {/* </Container> */}
//         </main>
//     );
// }

"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Container, Navbar, Nav, NavDropdown, Row, Col, Button, Form, InputGroup, Image } from 'react-bootstrap';
import { Instagram, Facebook, Twitter, Search, GlobeAsiaAustralia } from 'react-bootstrap-icons';

const TopMenu = () => (
  <Navbar collapseOnSelect expand="md" className="text-white topNav">
    <Container fluid>
      <Navbar.Brand>
        <Image src="/1x1.png" alt="Logo" height={40} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      {/* Collapsible content */}
        <Nav className="me-auto mt-2 mt-lg-0">
          <Nav.Item>
            <Image src="/logo1.png" alt="Logo" className="img-fluid rounded mx-auto d-block py-1 logo" />
          </Nav.Item>
        </Nav>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Container className="d-flex flex-column w-100 mt-3  text-white">
          {/* First nav bar */}
          <Nav className="justify-content-end mb-2  text-white">
            <NavDropdown title="Get Help" className="text-white bg-white" style={{ color: 'white'}}>
              <NavDropdown.Item className="oText">Customer Portal</NavDropdown.Item>
              <NavDropdown.Item className="oText">Community Forum</NavDropdown.Item>
              <NavDropdown.Item className="oText">Support</NavDropdown.Item>
              <NavDropdown.Item className="oText">Contact Us</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="oText">Buy now</Nav.Link>
            <Nav.Link className="text-white"><Search /></Nav.Link>
            <Nav.Link className="text-white"><GlobeAsiaAustralia /></Nav.Link>
          </Nav>

          {/* Second nav bar */}
          <Nav className="justify-content-end">
            <Nav.Link className="text-white">Home</Nav.Link>
            <Nav.Link className="text-white">Products</Nav.Link>
            <Nav.Link className="text-white">Downloads</Nav.Link>
            <Nav.Link className="text-white">Services</Nav.Link>
            <Nav.Link className="text-white">Partners</Nav.Link>
            <Nav.Link className="text-white">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

const MiddleMenu = () => (
  <Row className="justify-content-center">
    <Container className="bodyBg img-fluid pt-3">
      <Row>
        <Col>
          <h1 className="text-center pt-5 fw-bold">Simplify your data center</h1>
          <h6 className="text-center pt-3 pb-4">
            Proxmox delivers powerful, enterprise-grade solutions with full access to all functionality for everyone - highly reliable and secure.<br />
            The software-defined and open platforms are easy to deploy, manage and budget for.
          </h6>
          <div className="d-flex justify-content-center pb-5">
            {[
              {
                title: 'Proxmox Virtual Environment',
                description: 'Proxmox Virtual Environment is a complete open-source platform for enterprise virtualization. With the built-in web interface you can easily manage VMs and containers, software-defined storage and networking, high-availability clustering, and multiple out-of-the-box tools using a single solution.',
              },
              {
                title: 'Proxmox Backup Server',
                description: 'Proxmox Backup Server is an enterprise backup solution for backing up and restoring VMs, containers, and physical hosts. The open-source solution supports incremental backups, deduplication, Zstandard compression, and authenticated encryption.',
              },
              {
                title: 'Proxmox Mail Gateway',
                description: 'Proxmox Mail Gateway is an open-source email security solution that protects your mail server against all email threats from the moment they emerge. The full featured mail proxy can be easily deployed between the firewall and your internal mail server in just a few minutes.',
              },
            ].map((item, idx) => (
              <div key={idx} className="boxBg rounded mx-2 w-25 text-white p-4">
                <h3 className="text-center">{item.title}</h3>
                <p>{item.description}</p>
                <Button className="d-block mx-auto oBg text-black">Learn More</Button>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  </Row>
);

const FullWidthImage = () => (
  <Row className="justify-content-center">
    <Container className="boxBg img-fluid pt-3 p-5 boxBg">
      <Row>
        <Col>
          <h1 className="text-center pt-5 fw-light text-white">Get in touch</h1>
          <p className="text-center pt-3 pb-4 text-white">Haven't found what you are looking for?</p>
          <Button className="d-block mx-auto oBg text-black">Contact us</Button>
        </Col>
      </Row>
    </Container>
  </Row>
);

const FooterMenu = () => (
  <div className="footer footerBg d-flex flex-column vh-50">
    <Container className="p-5">
      <Row className="p-1">
        <Col>
          <h5 className="text-black">Products</h5>
          {['Proxmox Virtual Environment', 'Proxmox Backup Server', 'Proxmox Mail Gateway', 'Downloads', 'Support'].map((text, idx) => (
            <Nav.Link key={idx} href="#" className="oText">{text}</Nav.Link>
          ))}
        </Col>
        <Col>
          <h5 className="text-black">Resources</h5>
          {['Community', 'Developers', 'Success Stories', 'Press Room', 'Videos', 'Training'].map((text, idx) => (
            <Nav.Link key={idx} href="#" className="oText">{text}</Nav.Link>
          ))}
        </Col>
        <Col>
          <h5 className="text-black">Newsletter</h5>
          <InputGroup className="p1">
            <Form.Label className="text-black">Email*</Form.Label>
            <Form.Control type="text" placeholder="" aria-label="Enter Email Address" />
          </InputGroup>
          <Form.Check
            type="checkbox"
            id="flexCheckDefault"
            label="I agree with the privacy policy"
            className="text-black p-1"
          />
          <Button className="d-block oBg text-black">Subscribe</Button>
        </Col>
      </Row>
    </Container>
  </div>
);

export default function Home() {
  return (
    <main>

        <TopMenu />
        <MiddleMenu />
        <FullWidthImage />
        <FooterMenu />

    </main>
  );
}