import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import SAlert from "../../../components/Alert";
import SBreadCrumb from "../../../components/BreadCrumb";
import SNavbar from "../../../components/Navbar";
import SForm from "../components/form";

function CategoriesUpdate() {
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
  };

  return (
    <>
      <SNavbar />
      <Container className="mt-3">
        <SBreadCrumb
          textSecond={"Categories"}
          urlSecond={"/categories"}
          textThird="Create"
        />
        {alert.status && <SAlert type={alert.type} message={alert.message} />}
        <SForm
          loading={isLoading}
          form={form}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </Container>
    </>
  );
}

export default CategoriesUpdate;
