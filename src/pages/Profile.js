import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button, Alert } from "reactstrap";
import axios from "../api/axiosInstance";

const Profile = () => {

  const [user, setUser] = useState({
    owner: "",
    name: "",
    content: "",
  });
  const { owner, name, content } = user;

  const localUserData = JSON.parse(localStorage.getItem("tmng-user"));

  const token = JSON.parse(localStorage.getItem("token"));

  const history = useHistory();

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        axios.put(`/api/profile/${localUserData.pk}/`, user)
            .then((res) => 
                history.push("/todo")
            );
        
    } catch (err) {
        
    }

  };
  
  const getUser = async () => {
    await axios
        .get(`/api/profile/${localUserData.pk}`)
        .then((res) => {
            console.log(res.data);
            setUser({
                owner: res.data.owner,
                name: res.data.name,
                content: res.data.content,
            });
        })
        .catch((err) => console.log(err));
  }

  useEffect(() => {

    getUser();
  }, []);

  return (
    <>
        <h3 className="text-center">Profile</h3>
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label for="Owner" hidden>
                Username
                </Label>
                <Input
                id="owner"
                name="owner"
                value={owner}
                placeholder="Owner"
                type="text"
                onChange={handleChange}
                />
            </FormGroup>
            <FormGroup>
                <Label for="Name" hidden>
                Name
                </Label>
                <Input
                id="name"
                name="name"
                value={name}
                placeholder="Name"
                type="text"
                onChange={handleChange}
                />
            </FormGroup>
            <FormGroup>
                <Label for="Content" hidden>
                Repeat Password
                </Label>
                <Input
                id="content"
                name="content"
                value={content}
                placeholder="content"
                type="text"
                onChange={handleChange}
                />
            </FormGroup>
            <Button color="link" onClick={() => history.push("/todo")}>
                TodoList
            </Button>
            <Button type="submit" color="primary">
                Update
            </Button>
        </Form>
    </>
  );
};

export default Profile;
