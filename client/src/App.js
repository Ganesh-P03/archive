import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import Branch from "./pages/branch";
import departments from "./constants/departments";
import cIds from "./constants/cIds";
import CourseById from "./pages/course";

function createRouteDepartment(department) {
  return (
    <Route path={"/" + department} element={<Branch name={department} />} />
  );
}

function createRouteCid(cId) {
  return <Route path={"/" + cId} element={<CourseById cId={cId} />} />;
}

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {departments.map(createRouteDepartment)}
          {cIds.map(createRouteCid)}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
