import axios from "axios";
import React, { useState } from "react";
import { Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import SAlert from "../../../components/Alert";
import SBreadCrumb from "../../../components/BreadCrumb";
import SNavbar from "../../../components/Navbar";
import { config } from "../../../configs";
import SForm from "../components/form";

function CategoriesCreate() {
  const token = localStorage.getItem("access_token");
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
  });

  const [alert, setAlert] = useState({
    status: false,
    type: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const res = await axios({
        method: "POST",
        url: `${config.api_host_dev}/cms/categories`,
        data: form,
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.status === 201) {
        navigate("/categories");
      }
    } catch (err) {
      setAlert({
        ...alert,
        status: true,
        message: err?.response?.data?.msg || "Internal server error",
        type: "danger",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <SNavbar />
      <Container className="mt-5">
        <SBreadCrumb
          textSecond={"Categories"}
          urlSecond={"/categories"}
          textThird="Create"
        />
        <Card style={{ width: "50%" }} className="p-3 mt-4">
          {alert.status && (
            <SAlert variant={alert.type} message={alert.message} />
          )}
          <SForm
            loading={isLoading}
            form={form}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            disabled={isLoading}
          />
        </Card>
      </Container>
    </>
  );
}

export default CategoriesCreate;
