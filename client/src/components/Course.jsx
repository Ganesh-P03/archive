import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

const Course = (props) => {
  const navigate = useNavigate();

  const navigateToCid = (cId) => {
    navigate("/" + cId);
  };

  return (
    <div style={{ display: "flex" }}>
      <div>{props.cId}</div>
      <div style={{ marginLeft: "10px" }}>
        <button
          value={props.cId}
          onClick={(e) => {
            navigateToCid(e.target.value);
          }}
        >
          {props.cName}
        </button>
      </div>
    </div>
  );
};

export default Course;
