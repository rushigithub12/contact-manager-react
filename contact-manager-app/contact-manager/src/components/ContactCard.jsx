import React from "react";
import user from "../images/user.png";

function ContactCard(props) {
  const { id, name, email } = props.contact;
  return (
    <div className="item" >
      <img className="ui avatar image" src={user} alt="user" />
      <div  className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
        <i
          style={{ marginTop: "7px", color: "red" }}
          className="trash alternate outline icon"
        ></i>
      </div>
    </div>
  );
}

export default ContactCard;
