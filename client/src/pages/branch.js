import React from "react";
import courses from "../constants/Courses";
import Course from "../components/Course";
import Layout from "../Layout/layout";

function createCourse(course) {
  return <Course cName={course.name} cId={course.id} />;
}

const Branch = (props) => {
  var name = props.name;
  return (
    <Layout>
      <h1 style={{ textAlign: "center", margin: "20px" }}>
        Welcome to {props.name} branch
      </h1>
      <ul>{courses[name].map(createCourse)}</ul>
    </Layout>
  );
};

export default Branch;
