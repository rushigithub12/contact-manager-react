import React, { useState, useEffect } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";
import { useNavigate } from "react-router";

function Update() {
  let navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [ID, setID] = useState(null)

  const sendDataToAPI = () => {
    console.log('update btn')
    axios.put(`https://62988193f2decf5bb7445218.mockapi.io/crud-react/${ID}`, {
      firstName,
      lastName,
    }).then(() => {
      navigate('/read')
    });
  };

  useEffect(() => {
    setFirstName(localStorage.getItem("firstName"));
    setLastName(localStorage.getItem("lastName"));
    setID(localStorage.getItem("ID"))
  }, []);

  return (
    <Form>
      <Form.Field>
        <label>First Name</label>
        <input
          name="fname"
          value={firstName}
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input
          placeholder="Last Name"
          name="lname"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </Form.Field>
        <Button type="submit" onClick={sendDataToAPI}>
          Update
        </Button>
    </Form>
  );
}

export default Update;
