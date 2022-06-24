import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import Branch from "./pages/branch";
import departments from "./constants/departments";

function createRoute(department) {
  return (
    <Route path={"/" + department} element={<Branch name={department} />} />
  );
}

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {departments.map(createRoute)}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
