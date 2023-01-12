import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import SNavLink from "../NavLink";

function SNavbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/signin";
  };
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Semina Admin</Navbar.Brand>
        <Nav className="me-auto">
          <SNavLink action={() => navigate("/")}>Home</SNavLink>
          <SNavLink action={() => navigate("/categories")}>Categories</SNavLink>
          <SNavLink action={() => navigate("/talents")}>Talents</SNavLink>
          <SNavLink action={() => navigate("/payments")}>Payment</SNavLink>
          <SNavLink action={() => navigate("/events")}>Events</SNavLink>
          <SNavLink action={() => navigate("/participant")}>
            Participant
          </SNavLink>
          <SNavLink action={() => navigate("/orders")}>Orders</SNavLink>
        </Nav>
        <Nav className="justify-content-end">
          <Nav.Link onClick={() => handleLogout()}>Logout</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default SNavbar;
