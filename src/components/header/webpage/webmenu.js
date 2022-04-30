import './webmenu.css';
import { Nav, Navbar, Container } from 'react-bootstrap';



const WebMenu = () => {
  return (
    <div className="web">
      <Navbar className="header" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#" className="webmenu">
            Home
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#About" className="webmenu">
              About
            </Nav.Link>
            <Nav.Link href="#Projects" className="webmenu">
              Projects
            </Nav.Link>

            <Nav.Link href="#Skills" className="webmenu">
              Skills
            </Nav.Link>
            <Nav.Link href="#Work" className="webmenu">
              Work{" "}
            </Nav.Link>
            <Nav.Link href="#Contact" className="webmenu">
              Contact
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
export default WebMenu;