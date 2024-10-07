import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const DropdownMenu = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <NavDropdown title="About" id="basic-nav-dropdown">
            <NavDropdown.Item href="#about-cbit">About CBIT</NavDropdown.Item>
            <NavDropdown.Item href="#vision-mission">Vision & Mission</NavDropdown.Item>
            <NavDropdown.Item href="#chairman-desk">Chairman's Desk</NavDropdown.Item>
            <NavDropdown.Item href="#director-desk">Director's Desk</NavDropdown.Item>
            <NavDropdown.Item href="#principal-desk">Principal's Desk</NavDropdown.Item>
            <NavDropdown.Item href="#affiliations">Affiliations</NavDropdown.Item>
            <NavDropdown.Item href="#policy">Policy</NavDropdown.Item>
          </NavDropdown>
          {/* Add more NavDropdowns or Nav.Links as needed */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default DropdownMenu;