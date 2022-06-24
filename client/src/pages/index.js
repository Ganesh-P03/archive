import React from "react";
import departments from "../constants/departments";
import Department from "../components/Department";

function createDepartment(department) {
  return <Department name={department} />;
}

const Home = () => {
  return (
    <div>
      <h1>Departments</h1>
      {departments.map(createDepartment)}
    </div>
  );
};

export default Home;
