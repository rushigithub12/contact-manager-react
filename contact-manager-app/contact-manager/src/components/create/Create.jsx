import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";

function Create() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const sendDataToAPI = () => {
    axios.post("https://62988193f2decf5bb7445218.mockapi.io/crud-react", {
      firstName,
      lastName,
    });
  };
  return (
    <Form>
      <Form.Field>
        <label>First Name</label>
        <input
          name="fname"
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input
          placeholder="Last Name"
          name="lname"
          onChange={(e) => setLastName(e.target.value)}
        />
      </Form.Field>
      <Link to="/read">
        {" "}
        <Button type="submit" onClick={sendDataToAPI}>
          Submit
        </Button>
      </Link>
    </Form>
  );
}

export default Create;
