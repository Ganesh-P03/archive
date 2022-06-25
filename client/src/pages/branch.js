import React from "react";
import courses from "../constants/Courses";
import Course from "../components/Course";

function createCourse(course) {
  return <Course cName={course.name} cId={course.id} />;
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
