import React from "react";
import courses from "../constants/Courses";
import Course from "../components/Course";
import Layout from "../Layout/layout";
import Table from "react-bootstrap/Table";
import styled from "styled-components";

function createCourse(course) {
  return <Course cName={course.name} cId={course.id} cLink={course.link} />;
}

const Branch = (props) => {
  var name = props.name;
  return (
    <Layout>
      <h1 style={{ textAlign: "center", margin: "20px" }}>
        Welcome to {props.name} branch
      </h1>
      <div style={{ margin: "20px" }}>
        <Table bordered hover>
          <thead>
            <tr>
              <Th>Course id</Th>
              <Th>Course name</Th>
              <Th></Th>
              <Th></Th>
            </tr>
          </thead>
          <tbody>{courses[name].map(createCourse)}</tbody>
        </Table>
      </div>
    </Layout>
  );
};

export default Branch;

const Th = styled.th`
  text-align: center;
`;
