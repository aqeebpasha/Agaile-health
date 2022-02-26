import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import * as yup from "yup";
import { Formik } from "formik";

function LoginS(props) {
  const schema = yup.object().shape({
    email: yup.string().required("Email is required"),
    password: yup.string().required("Password is required"),
  });
  return (
    <div
      style={{
        position: "relative",
        top: "120px",
        width: "50%",
        display: "flex",
        justifyContent: "center",
        left: "350px",
        borderRadius: "10px",
        height: "270px",
        padding: "40px",
      }}
    >
      <Formik
        validationSchema={schema}
        onSubmit={console.log}
        initialValues={{
          email: "",
          password: "",
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group md="" controlId="validationFormik01">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                name="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
                isValid={touched.email && !errors.email}
                style={{ width: "300px" }}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <br />
            <Form.Group controlId="validationFormik02">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                isInvalid={!!errors.password}
                isValid={touched.password && !errors.password}
                style={{ width: "300px" }}
              />

              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>
            <br />

            <Button
              type="submit"
              onClick={() => {
                 props.history.push("/mainModule");
              }}
            >
              Login
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default LoginS;
