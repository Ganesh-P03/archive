import React from "react";
import departments from "../constants/departments";
import Department from "../components/Department";
import Layout from "../Layout/layout";

function createDepartment(department) {
  return <Department name={department} />;
}

const Home = () => {
  return (
    <Layout>
      <div style={{ textAlign: "center" }}>
        <h1
          style={{
            margin: "20px",
          }}
        >
          Departments
        </h1>

        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            border: "2px solid palevioletred",
            margin: "20px",
          }}
        >
          {departments.map(createDepartment)}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
