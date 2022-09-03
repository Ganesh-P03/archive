import React from "react";

import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar
      expand="lg"
      style={{ height: "54px", backgroundColor: "#D4A5A5", fontWeight: "bold" }}
    >
      <Container>
        <Navbar.Brand href="/" style={{ fontSize: "30px" }}>
          Archive
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <NavDropdown title="Contribute" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Report</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                FeedBack/Suggestions
              </NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Add a Question paper!
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
