import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { BsSearch } from "react-icons/bs";

const Input = ({ onChange, name, value }) => {
  return (
    <div
      className="container mt-5"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <InputGroup
        className="mb-3"
        style={{ width: 200 }}
        onChange={onChange}
        value={value}
      >
        <Form.Control
          placeholder={name}
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Text id="basic-addon2">
          <BsSearch />
        </InputGroup.Text>
      </InputGroup>
    </div>
  );
};
export default Input;
