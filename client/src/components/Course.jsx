import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

const Course = (props) => {
  const navigate = useNavigate();

  const navigateToCid = (cId) => {
    navigate("/" + cId);
  };

  return (
    <div
      style={{
        display: "flex",
        margin: "20px",
        border: "2px solid blue",
        padding: "5px",
        height: "50px",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <div style={{ flexGrow: "1", textAlign: "center", flexBasis: "0" }}>
        {props.cId}
      </div>
      <div
        style={{
          textAlign: "center",
          flexGrow: "2",
          flexBasis: "0",
        }}
      >
        <button
          value={props.cId}
          onClick={(e) => {
            navigateToCid(e.target.value);
          }}
        >
          {props.cName}
        </button>
      </div>
      <div style={{ flexGrow: "1", flexBasis: "0", textAlign: "center" }}>
        details
      </div>
    </div>
  );
};

export default Course;
