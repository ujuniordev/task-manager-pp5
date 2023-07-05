import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button, Alert } from "reactstrap";
import axios from "../../api/axiosInstance";
import Context from "../../Context";

const SignUpForm = () => {
  const [appState, setAppState] = useContext(Context);

  const [signUpData, setSignUpData] = useState({
    username: "",
    password1: "",
    password2: "",
  });
  const { username, password1, password2 } = signUpData;

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
      setAppState({ ...appState, loading: true });
      await axios.post("/dj-rest-auth/registration/", signUpData);
      history.push("/signin");
    } catch (err) {
      setErrors(err.response?.data);
    }

    setAppState({ ...appState, loading: false });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="username" hidden>
          Username
        </Label>
        <Input
          id="username"
          name="username"
          value={username}
          placeholder="Username"
          type="text"
          onChange={handleChange}
        />
      </FormGroup>
      {errors.username?.map((message, idx) => (
        <Alert color="warning" key={idx}>
          {message}
        </Alert>
      ))}{" "}
      <FormGroup>
        <Label for="password1" hidden>
          Password
        </Label>
        <Input
          id="password1"
          name="password1"
          value={password1}
          placeholder="Password"
          type="password"
          onChange={handleChange}
        />
      </FormGroup>
      {errors.password1?.map((message, idx) => (
        <Alert color="warning" key={idx}>
          {message}
        </Alert>
      ))}{" "}
      <FormGroup>
        <Label for="password2" hidden>
          Repeat Password
        </Label>
        <Input
          id="password2"
          name="password2"
          value={password2}
          placeholder="Confirm Password"
          type="password"
          onChange={handleChange}
        />
      </FormGroup>
      {errors.password2?.map((message, idx) => (
        <Alert color="warning" key={idx}>
          {message}
        </Alert>
      ))}{" "}
      {errors.non_field_errors?.map((message, idx) => (
        <Alert key={idx} color="warning" className="mt-3">
          {message}
        </Alert>
      ))}
      <Button color="link" onClick={() => history.push("/signin")}>
        Sign In
      </Button>
      <Button type="submit" color="primary">
        Sign Up
      </Button>
    </Form>
  );
};

export default SignUpForm;
