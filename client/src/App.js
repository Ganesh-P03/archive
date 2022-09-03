import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import Home from "./pages";
import Branch from "./pages/branch";
import Admin from "./pages/admin";
import Create from "./pages/create";
import Delete from "./pages/delete";
import Update from "./pages/update";
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
          <Route exact path="/create" element={<Create />} />
          <Route exact path="/delete" element={<Delete />} />
          <Route exact path="/update" element={<Update />} />
          {departments.map(createRouteDepartment)}
          <Route path="/:id" element={<CourseById />} />

          {/* {cIds.map(createRouteCid)} */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
