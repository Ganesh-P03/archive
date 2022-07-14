import React, { useState } from "react";
import api from "../api";

import { Form, Button } from "react-bootstrap";
import FormInput from "../components/FormInput";

const Delete = () => {
  const [id, setId] = useState(null);

  const handleDeletePaper = () => {
    if (window.confirm(`Do you want to delete thepaper permanently?`)) {
      api.deletePaper(id);
    }

    window.location.reload();
  };

  return (
    <div>
      <h1>Delete a paper</h1>

      <div
        style={{
          width: "70%",
          marginTop: "60px",
          marginLeft: "auto",
          marginRight: "auto",

          border: "2px solid black",
          padding: "20px",
        }}
      >
        <Form>
          <FormInput
            label="id"
            type="text"
            value={id}
            onChange={(e) => {
              setId(e.target.value);
            }}
          />

          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              label="I verified that all are correct"
            />
          </Form.Group>

          <Button variant="primary" onClick={handleDeletePaper}>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Delete;
