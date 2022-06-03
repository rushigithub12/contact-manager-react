import axios from "axios";
import React, { useEffect, useState } from "react";
import { Icon, Label, Menu, Table, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

function Read() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://62988193f2decf5bb7445218.mockapi.io/crud-react`)
      .then((getData) => {
        setApiData(getData.data);
      });
  });

  const updateID = (id, firstName, lastName) => {
    localStorage.setItem("ID", id);
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
  };

  const getData = () => {
    axios
      .get(`https://62988193f2decf5bb7445218.mockapi.io/crud-react`)
      .then((getData) => {
        setApiData(getData.data);
      });
  };

  const onDelete = (id) => {
    axios
      .delete(`https://62988193f2decf5bb7445218.mockapi.io/crud-react/${id}`)
      .then(() => {
        getData();
      });
  };

  return (
    <>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>FirstName</Table.HeaderCell>
            <Table.HeaderCell>LastName</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {apiData.map((data) => {
            return (
              <Table.Row>
                <Table.Cell>{data.id}</Table.Cell>
                <Table.Cell>{data.firstName}</Table.Cell>
                <Table.Cell>{data.lastName}</Table.Cell>
                <Table.Cell>
                  <Link to="/update">
                    <Button
                      color="green"
                      onClick={() =>
                        updateID(data.id, data.firstName, data.lastName)
                      }
                    >
                      Update
                    </Button>
                  </Link>
                </Table.Cell>
                <Table.Cell>
                  <Button color="red" onClick={() => onDelete(data.id)}>
                    Delete
                  </Button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
      <div className="backBtn">
        <Link to="/">
          <Button color="blue" style={{ marginLeft: '15rem' }}>
            Back
          </Button>
        </Link>
      </div>
    </>
  );
}

export default Read;
