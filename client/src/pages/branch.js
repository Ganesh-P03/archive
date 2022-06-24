import React from "react";
import courses from "../constants/Courses";

function createCourse(course) {
  return <li>{course}</li>;
}

const Branch = (props) => {
  var name = props.name;
  return (
    <div>
      <h1>Welcome to {props.name} branch</h1>
      <ul>{courses[name].map(createCourse)}</ul>
    </div>
  );
};

export default Branch;
