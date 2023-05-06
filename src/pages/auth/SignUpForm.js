import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button, Alert } from "reactstrap";
import axios from "axios";

const SignUpForm = () => {
  const [signUpData, setSignUpData] = useState({
    username: "",
    password: "",
    confirmpassword: "",
  });
  const { username, password, confirmpassword } = signUpData;

  const [errors, setErrors] = useState({});

  const history = useHistory();

  const handleChange = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/dj-rest-auth/registration/", signUpData);
      history.push("/signin");
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="username" hidden>
          User Name
        </Label>
        <Input
          id="username"
          name="username"
          value={username}
          placeholder="User Name"
          type="text"
          onChange={handleChange}
        />
      </FormGroup>
      {errors.username?.map((message, idx) => (
        <Alert color="warning" key={idx}>
          {message}
        </Alert>
      ))}
      {" "}
      <FormGroup>
        <Label for="password" hidden>
          Password
        </Label>
        <Input
          id="password"
          name="password"
          value={password}
          placeholder="Password"
          type="password"
          onChange={handleChange}
        />
      </FormGroup>
      {errors.password?.map((message, idx) => (
        <Alert color="warning" key={idx}>
          {message}
        </Alert>
      ))}
      {" "}
      <FormGroup>
        <Label for="confirmpassword" hidden>
          Repeat Password
        </Label>
        <Input
          id="confirmpassword"
          name="confirmpassword"
          value={confirmpassword}
          placeholder="Confirm Password"
          type="confirmpassword"
          onChange={handleChange}
        />
      </FormGroup>
      {errors.confirmpassword?.map((message, idx) => (
        <Alert color="warning" key={idx}>
          {message}
        </Alert>
      ))}
      {" "}
      <Button type="submit">Sign Up</Button>
      {errors.non_field_errors?.map((message, idx) => (
              <Alert key={idx} color="warning" className="mt-3">
                {message}
              </Alert>
            ))}
    </Form>
  );
};

export default SignUpForm;
