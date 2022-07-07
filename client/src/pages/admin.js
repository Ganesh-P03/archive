import React, { Component, useState } from "react";
import api from "../api";
import { storage } from "../storage/base";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Form } from "react-bootstrap";

import styled from "styled-components";

const Title = styled.h1.attrs({
  className: "h1",
})``;

const Wrapper = styled.div.attrs({
  className: "form-group",
})`
  margin: 0 30px;
`;

const Label = styled.label`
  margin: 5px;
`;

const InputText = styled.input.attrs({
  className: "form-control",
})`
  margin: 5px;
`;

const Button = styled.button.attrs({
  className: `btn btn-primary`,
})`
  margin: 15px 15px 15px 5px;
`;

const CancelButton = styled.a.attrs({
  className: `btn btn-danger`,
})`
  margin: 15px 15px 15px 5px;
`;

const PaperInsert = () => {
  const [cName, setCName] = useState(null);
  const [cId, setCId] = useState(null);
  const [year, setYear] = useState(null);
  const [url, setUrl] = useState(null);
  const [fName, setFName] = useState(null);
  const [topics, setTopics] = useState(null);

  const handleChangeInputFile = (e) => {
    const file = e.target.files[0];

    const fileRef = ref(storage, file.name);

    uploadBytes(fileRef, file).then((snapshot) => {
      console.log("Uploaded a file");
      getDownloadURL(snapshot.ref).then((url) => {
        setUrl(url);
      });
    });
  };

  const handleIncludePaper = async () => {
    const payload = { cName, cId, year, url, fName, topics };

    console.log(payload);

    await api.insertPaper(payload).then((res) => {
      window.alert(` inserted successfully`);
    });
  };

  return (
    <Wrapper>
      <Title>Upload to Archive!!</Title>

      <div
        style={{
          width: "70%",
          marginTop: "60px",
          marginLeft: "auto",
          marginRight: "auto",

          border: "2px solid black",
          padding: "20px",
        }}
      >
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Course Name</Form.Label>
            <Form.Control
              type="text"
              value={cName}
              onChange={(e) => {
                setCName(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Course Id</Form.Label>
            <Form.Control
              type="text"
              value={cId}
              onChange={(e) => {
                setCId(e.target.value);
              }}
            />
            <Form.Text className="text-muted">
              Please make sure it matches with the record!
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Year</Form.Label>
            <Form.Control
              type="text"
              value={year}
              onChange={(e) => {
                setYear(e.target.value);
              }}
            />
          </Form.Group>

          <div className="form-group">
            <input
              type="file"
              className="form-control-file"
              id="exampleFormControlFile1"
              onChange={handleChangeInputFile}
            />
          </div>

          <Form.Group className="mb-3">
            <Form.Label>Url</Form.Label>
            <Form.Control
              disabled="true"
              type="text"
              value={url}
              onChange={(e) => {
                setUrl(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>File Name</Form.Label>
            <Form.Control
              type="text"
              value={fName}
              onChange={(e) => {
                setFName(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Topics</Form.Label>
            <Form.Control
              type="text"
              value={topics}
              onChange={(e) => {
                setTopics(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              label="I verified that all are correct"
            />
          </Form.Group>

          <Button variant="primary" onClick={handleIncludePaper}>
            Submit
          </Button>
        </Form>
      </div>
    </Wrapper>
  );
};

export default PaperInsert;
