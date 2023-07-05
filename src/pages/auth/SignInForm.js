import React, { useContext, useEffect, useState } from "react";
import { Form, FormGroup, Label, Input, Button, Alert } from "reactstrap";
import { useHistory } from "react-router-dom";
import axios from "../../api/axiosInstance";
import Context from "../../Context";

function SignInForm() {
  const [appState, setAppState] = useContext(Context);

  const [signInData, setSignInData] = useState({
    username: "",
    authpassword: "",
  });
  const { username, password } = signInData;

  const [errors, setErrors] = useState({});

  const history = useHistory();
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setAppState({ ...appState, loading: true });
      const { data } = await axios.post("/dj-rest-auth/login/", signInData);
      setAppState({ loading: false, user: data.user });
      localStorage.setItem("tmng-user", JSON.stringify(data.user));
      history.push("/");
    } catch (err) {
      setErrors(err.response?.data);
      setAppState({ loading: false, user: null });
    }
  };

  const handleChange = (event) => {
    setSignInData({
      ...signInData,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    const localUserData = localStorage.getItem("tmng-user");

    if (localUserData) {
      setAppState({ ...appState, user: JSON.parse(localUserData) });
      history.push("/");
    }
  }, []);

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
          placeholder="Username"
          type="text"
          onChange={handleChange}
        />
      </FormGroup>{" "}
      {errors.username?.map((message, idx) => (
        <Alert key={idx} color="warning">
          {message}
        </Alert>
      ))}
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
        <Alert key={idx} color="warning">
          {message}
        </Alert>
      ))}{" "}
      {errors.non_field_errors?.map((message, idx) => (
        <Alert key={idx} color="warning" className="mt-3">
          {message}
        </Alert>
      ))}
      <div className="buttons">
        <Button color="link" onClick={() => history.push("/signup")}>
          Sign Up
        </Button>
        <Button type="submit" color="primary">
          Sign In
        </Button>
      </div>
    </Form>
  );
}
export default SignInForm;
