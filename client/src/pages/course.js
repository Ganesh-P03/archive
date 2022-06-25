import React, { useEffect, useState } from "react";
import api from "../api";

const CourseById = (props) => {
  const courseId = props.cId;

  const [papers, setPapers] = useState("");
  const [status, setStatus] = useState(0);

  useEffect(() => {
    getPapersByCid(courseId);
  }, [courseId]);

  //   const getPapers = () => {
  //     console.log("Hello");
  //     api.getAllPapers().then((res) => {
  //       console.log(res.data.data);

  //       setPapers(res.data.data);
  //       setStatus(1);
  //     });
  //   };

  const getPapersByCid = (cID) => {
    console.log(cID);
    api.getPapersByCid(cID).then((res) => {
      console.log(res.data.data);
      setPapers(res.data.data);
      setStatus(1);
    });
  };

  function createDisplay(paper) {
    return (
      <div style={{ margin: "20px" }}>
        <ul>
          <li>{paper.cName}</li>
          <li>{paper.cId}</li>
          <li>{paper.year}</li>
          <li>
            <a href={paper.url} target="_blank">
              {paper.fName}
            </a>
          </li>
          <li>{paper.topics}</li>
        </ul>
      </div>
    );
  }

  return (
    <div>
      <h1> Welcome to {props.cId}</h1>

      {status == 1 ? papers.map(createDisplay) : ""}
    </div>
  );
};

export default CourseById;
