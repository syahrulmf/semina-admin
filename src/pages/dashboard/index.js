import React from "react";
import { Container, Table } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import SBreadCrumb from "../../components/BreadCrumb";
import SButton from "../../components/Button";
import SNavbar from "../../components/Navbar";

function Dashboard() {
  const token = localStorage.getItem("access_token");

  if (!token) return <Navigate to={"/signin"} replace={true} />;

  return (
    <>
      <SNavbar />
      <Container className="mt-5">
        <SBreadCrumb />

        <SButton color={"primary"} className="my-3">
          Tambah
        </SButton>

        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default Dashboard;
