import React, { useState } from "react";
import { Card, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import SAlert from "../../../components/Alert";
import SBreadCrumb from "../../../components/BreadCrumb";
import SForm from "../components/form";

import { setNotif } from "../../../redux/notif/actions";
import { postData } from "../../../utils/fetch";

function CategoryCreate() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
    const res = await postData("/cms/categories", form);
    if (res?.data?.data) {
      dispatch(
        setNotif(
          true,
          "success",
          `berhasil tambah kategori ${res.data.data.name}`
        )
      );
      navigate("/categories");
      setIsLoading(false);
    } else {
      setIsLoading(false);
      setAlert({
        ...alert,
        status: true,
        type: "danger",
        message: res.response.data.msg,
      });
    }
  };

  return (
    <Container className="mt-5">
      <SBreadCrumb
        textSecond={"Categories"}
        urlSecond={"/categories"}
        textThird="Create"
      />
      {alert.status && <SAlert variant={alert.type} message={alert.message} />}
      <Card className="p-3" style={{ width: "50%" }}>
        <SForm
          form={form}
          isLoading={isLoading}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </Card>
    </Container>
  );
}

export default CategoryCreate;
