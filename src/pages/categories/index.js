import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Spinner, Table } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";
import SBreadCrumb from "../../components/BreadCrumb";
import SButton from "../../components/Button";
import SNavbar from "../../components/Navbar";
import { config } from "../../configs";

function Categories() {
  const token = localStorage.getItem("access_token");
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getCategories = async () => {
    setIsLoading(true);
    try {
      const res = await axios({
        method: "GET",
        url: `${config.api_host_dev}/cms/categories`,
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.status === 200) {
        setData(res.data.data);
      }
    } catch (err) {
      console.log(err.response.data.msg);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  if (!token) return <Navigate to={"/signin"} replace={true} />;

  return (
    <>
      <SNavbar />
      <Container className="mt-5">
        <SBreadCrumb textSecond={"Categories"} />

        <SButton
          color={"primary"}
          className="my-3"
          action={() => navigate("create")}
        >
          Tambah
        </SButton>

        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={3} align="center">
                  <Spinner animation="border" variant="primary" />
                </td>
              </tr>
            ) : (
              data.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>Edit | Delete</td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default Categories;
