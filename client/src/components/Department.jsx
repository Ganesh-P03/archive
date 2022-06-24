import React from "react";
import styled from "styled-components";
import { Routes, Route, useNavigate } from "react-router-dom";

const Department = (props) => {
  const navigate = useNavigate();

  const navigateToCourses = (dep) => {
    navigate("/" + dep);
  };

  return (
    <div>
      <Button
        value={props.name}
        onClick={(e) => {
          navigateToCourses(e.target.value);
        }}
      >
        {props.name}
      </Button>
    </div>
  );
};

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export default Department;
