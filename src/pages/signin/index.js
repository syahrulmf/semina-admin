import { useState } from "react";
import { Card, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import SAlert from "../../components/Alert";
import { userLogin } from "../../redux/auth/actions";
import { postData } from "../../utils/fetch";
import SForm from "./components/Form";

function Signin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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

    const res = await postData("/cms/auth/signin", form);

    if (res?.data?.data) {
      dispatch(
        userLogin(
          res.data.data.token,
          res.data.data.role,
          res.data.data.refreshToken,
          res.data.data.email
        )
      );
      setIsLoading(false);
      navigate("/");
    } else {
      setAlert({
        ...alert,
        status: true,
        message: res?.response?.data?.msg || "Internal server error",
        type: "danger",
      });
      setIsLoading(false);
    }
  };

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
