import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import Branch from "./pages/branch";
import Admin from "./pages/admin";
import departments from "./constants/departments";
import cIds from "./constants/cIds";
import CourseById from "./pages/course";
import "bootstrap/dist/css/bootstrap.min.css";

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
          <Route exact path="/admin" element={<Admin />} />
          {departments.map(createRouteDepartment)}
          {cIds.map(createRouteCid)}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
