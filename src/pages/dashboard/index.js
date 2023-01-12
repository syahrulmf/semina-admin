import React from "react";
import { Container } from "react-bootstrap";
import SBreadCrumb from "../../components/BreadCrumb";

function Dashboard() {
  return (
    <Container className="mt-5">
      <SBreadCrumb />
      <h1>Dashboard</h1>
    </Container>
  );
}

export default Dashboard;
