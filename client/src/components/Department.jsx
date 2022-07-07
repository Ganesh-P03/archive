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
  font-size: 2em;
  margin: 20px;
  padding: 0.25em 1em;
  width: 200px;
  height: 200px;
  border-radius: 5px;
  background: #3481d9;
  background-image: -webkit-linear-gradient(top, #3481d9, #2baab8);
  background-image: -moz-linear-gradient(top, #3481d9, #2baab8);
  background-image: -ms-linear-gradient(top, #3481d9, #2baab8);
  background-image: -o-linear-gradient(top, #3481d9, #2baab8);
  background-image: linear-gradient(to bottom, #3481d9, #2baab8);
  -webkit-border-radius: 28;
  -moz-border-radius: 28;
  border-radius: 28px;
  text-shadow: 1px 1px 3px #666666;
  -webkit-box-shadow: 3px 3px 4px #666666;
  -moz-box-shadow: 3px 3px 4px #666666;
  box-shadow: 3px 3px 4px #666666;
  font-family: Arial;
  color: #ffffff;
  font-size: 22px;
  padding: 20px 20px 20px 20px;
  text-decoration: none;

  :hover {
    background: #3cfcc2;
    background-image: -webkit-linear-gradient(top, #3cfcc2, #3734d9);
    background-image: -moz-linear-gradient(top, #3cfcc2, #3734d9);
    background-image: -ms-linear-gradient(top, #3cfcc2, #3734d9);
    background-image: -o-linear-gradient(top, #3cfcc2, #3734d9);
    background-image: linear-gradient(to bottom, #3cfcc2, #3734d9);
    text-decoration: none;
  }
`;

export default Department;
