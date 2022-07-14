import { Form } from "react-bootstrap";
import React from "react";

const FormInput = (props) => {
  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label>{props.label}</Form.Label>
        <Form.Control
          type={props.type}
          value={props.value}
          onChange={props.onChange}
        />
      </Form.Group>
    </>
  );
};

export default FormInput;
