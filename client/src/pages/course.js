import React, { useEffect, useState } from "react";
import api from "../api";
import Layout from "../Layout/layout";
import Button from "react-bootstrap/Button";

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
      <div class="card" style={{ margin: "20px" }}>
        <div class="card-body" style={{ display: "flex" }}>
          <div style={{ flexGrow: "1", flexBasis: "0" }}>
            <iframe src={paper.url} scrolling="auto"></iframe>
          </div>

          <div
            style={{
              flexGrow: "2",
              flexBasis: "0",
              justifyContent: "center",
              marginLeft: "auto",
            }}
          >
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
          <div style={{ flexGrow: "1", flexBasis: "0", alignSelf: "center" }}>
            <Button
              variant="primary"
              onClick={() => {
                window.open(paper.url, "_blank");
              }}
            >
              View Question Paper
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Layout>
      <div>
        <h1 style={{ textAlign: "center", margin: "20px" }}>
          Welcome to {props.cId}
        </h1>
        <div>{status == 1 ? papers.map(createDisplay) : ""}</div>
      </div>
    </Layout>
  );
};

export default CourseById;
