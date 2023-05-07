import React, { useContext, useState } from "react";
import { Form, FormGroup, Label, Input, Button, Alert } from "reactstrap";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { SetCurrentUserContext } from "../../App";

function SignInForm() {
  const setCurrentUser = useContext(SetCurrentUserContext);

  const [signInData, setSignInData] = useState({
    username: "",
    authpassword: "",
  });
  const { username, authpassword } = signInData;

  const [errors, setErrors] = useState({});

  const history = useHistory();
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await axios.post("/dj-rest-auth/login/", signInData);
      setCurrentUser(data.user)
      history.push("/");
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  const handleChange = (event) => {
    setSignInData({
      ...signInData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Form>
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
        </FormGroup>{" "}
        {errors.username?.map((message, idx) => (
          <Alert key={idx} color="warning">
            {message}
          </Alert>
        ))}
        <FormGroup>
          <Label for="authpassword" hidden>
            Password
          </Label>
          <Input
            id="authpassword"
            name="authpassword"
            value={authpassword}
            placeholder="Password"
            type="password"
            onChange={handleChange}
          />
        </FormGroup>
        {errors.authpassword?.map((message, idx) => (
          <Alert key={idx} color="warning">
            {message}
          </Alert>
        ))}{" "}
        <Button type="submit">Sign In</Button>
        {errors.non_field_errors?.map((message, idx) => (
          <Alert key={idx} color="warning" className="mt-3">
            {message}
          </Alert>
        ))}
      </Form>
    </Form>
  );
}
export default SignInForm;