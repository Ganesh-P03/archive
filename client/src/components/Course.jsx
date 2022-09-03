import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import styled from "styled-components";
const Course = (props) => {
  const navigate = useNavigate();

  const navigateToCid = (cId) => {
    navigate("/" + cId);
  };

  return (
    <tr>
      <Td>{props.cId}</Td>

      <Td>{props.cName}</Td>

      <Td>
        <FontAwesomeIcon
          style={{ cursor: "pointer" }}
          icon={faCircleInfo}
          onClick={() => {
            window.open(props.cLink, "_blank");
          }}
        />
      </Td>

      <Td>
        <Button
          onClick={() => {
            navigateToCid(props.cId);
          }}
        >
          <FontAwesomeIcon icon={faEye} /> view question papers
        </Button>
      </Td>
    </tr>
  );
};

export default Course;

const Td = styled.td`
  text-align: center;
  vertical-align: baseline;
`;
