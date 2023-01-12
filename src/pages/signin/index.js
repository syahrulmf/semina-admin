import axios from "axios";
import { useState } from "react";
import { Card, Container } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";
import SAlert from "../../components/Alert";
import { config } from "../../configs";
import SForm from "./components/Form";

function Signin() {
  const navigate = useNavigate();
  const token = localStorage.getItem("access_token");
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [alert, setAlert] = useState({
    status: false,
    message: "",
    type: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const res = await axios({
        method: "POST",
        url: `${config.api_host_dev}/cms/auth/signin`,
        data: form,
      });

      console.log(res.status);
      if (res.status === 201) {
        localStorage.setItem("access_token", res.data.data.token);
        navigate("/");
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

  if (token) return <Navigate to={"/"} replace={true} />;

  return (
    <Container md={12}>
      <div style={{ width: "50%" }} className="m-auto mt-5">
        {alert.status && (
          <SAlert variant={alert.type} message={alert.message} />
        )}
      </div>
      <Card style={{ width: "50%" }} className="m-auto mt-5">
        <Card.Body>
          <Card.Title className="text-center">Form Signin</Card.Title>
          <SForm
            loading={isLoading}
            form={form}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Signin;
