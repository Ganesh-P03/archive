import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
const Admin = () => {
  const navigate = useNavigate();

  const navigateToAdminCrud = (Crud) => {
    navigate("/" + Crud);
  };

  return (
    <div>
      <Button
        value="create"
        onClick={(e) => {
          navigateToAdminCrud(e.target.value);
        }}
      >
        Create
      </Button>
      <br />
      <Button
        value="delete"
        onClick={(e) => {
          navigateToAdminCrud(e.target.value);
        }}
      >
        Delete
      </Button>
      <br />
      <Button
        value="update"
        onClick={(e) => {
          navigateToAdminCrud(e.target.value);
        }}
      >
        Update
      </Button>
    </div>
  );
};

export default Admin;
