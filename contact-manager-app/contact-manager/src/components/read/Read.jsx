import axios from "axios";
import React, { useEffect, useState } from "react";
import { Icon, Label, Menu, Table, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

function Read() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    axios
      .get("https://62988193f2decf5bb7445218.mockapi.io/crud-react")
      .then((getData) => {
        setApiData(getData.data);
      });
  });
  return (
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
                  <Button color="green">Update</Button>
                </Link>
              </Table.Cell>
              <Table.Cell>
                <Link to="/delete">
                  <Button color="red">Delete</Button>
                </Link>
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
}

export default Read;
