import React, { useEffect, useState } from "react";
import api from "../api";
import Layout from "../Layout/layout";
import Table from "react-bootstrap/Table";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const CourseById = (props) => {
  //const courseId = props.cId;
  let params = useParams();
  let courseId = params.id;
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

  // function createDisplay(paper) {
  //   return (
  //     <div class="card" style={{ margin: "20px" }}>
  //       <div class="card-body" style={{ display: "flex" }}>
  //         <div style={{ flexGrow: "1", flexBasis: "0" }}>
  //           <iframe src={paper.url} scrolling="auto"></iframe>
  //         </div>

  //         <div
  //           style={{
  //             flexGrow: "2",
  //             flexBasis: "0",
  //             justifyContent: "center",
  //             marginLeft: "auto",
  //           }}
  //         >
  //           <ul>
  //             <li>Name: {paper.cName}</li>
  //             <li>{paper.cId}</li>
  //             <li>{paper.year}</li>

  //             <li>
  //               <a href={paper.url} target="_blank" rel="noreferrer">
  //                 {paper.fName}
  //               </a>
  //             </li>
  //             <li>{paper.topics}</li>
  //           </ul>
  //         </div>
  //         <div style={{ flexGrow: "1", flexBasis: "0", alignSelf: "center" }}>
  //           <Button
  //             variant="primary"
  //             onClick={() => {
  //               window.open(paper.url, "_blank");
  //             }}
  //           >
  //             View Question Paper
  //           </Button>
  //         </div>
  //       </div>
  //       <span>{paper._id}</span>
  //     </div>
  //   );
  // }

  function createTableBody(paper) {
    return (
      <tr>
        <Td>{paper.topics}</Td>
        <Td>{paper.fName}</Td>
        <Td>{paper.year}</Td>
        <Td>
          <FontAwesomeIcon
            style={{ cursor: "pointer" }}
            icon={faCircleInfo}
            onClick={() => {
              var copyText = paper._id;
              navigator.clipboard.writeText(copyText);
              alert("Copied the text: " + copyText);
            }}
          />
        </Td>
        <Td>
          <Button
            variant="primary"
            onClick={() => {
              window.open(paper.url, "_blank");
            }}
          >
            <FontAwesomeIcon icon={faEye} />
            View Paper
          </Button>
        </Td>
      </tr>
    );
  }

  function createDisplay(papers) {
    return (
      <div>
        <div style={{ margin: "20px" }}>
          <Table bordered hover>
            <thead>
              <tr>
                <Th>Topics</Th>
                <Th>Type</Th>
                <Th>Year</Th>
                <Th>ID</Th>
                <Th>paper</Th>
              </tr>
            </thead>
            <tbody>{papers.map(createTableBody)}</tbody>
          </Table>
        </div>
      </div>
    );
  }
  return (
    <Layout>
      <div>
        <h1 style={{ textAlign: "center", margin: "20px" }}>
          Welcome to {courseId}
        </h1>
        <div>{status === 1 ? createDisplay(papers) : ""}</div>
      </div>
    </Layout>
  );
};

export default CourseById;

const Th = styled.th`
  text-align: center;
`;

const Td = styled.td`
  text-align: center;
  vertical-align: baseline;
`;
