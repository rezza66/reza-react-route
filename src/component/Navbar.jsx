import { Container, Nav, Navbar } from "react-bootstrap";

function NavigationBar() {
  return (
    <Navbar expand="lg" className="bg-primary w-100 " data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/" className="fs-3">
          Omezapresent
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto w-100 dflex justify-content-end">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
