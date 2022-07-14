import React, { useState } from "react";
import api from "../api";
import { storage } from "../storage/base";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Form, Button } from "react-bootstrap";
import FormInput from "../components/FormInput";

const Update = () => {
  const [id, setId] = useState(null);
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

  const handleUpdatePaper = async () => {
    const payload = { cName, cId, year, url, fName, topics };

    console.log(payload);

    await api.updatePaper(id, payload).then((res) => {
      window.alert(` Updated successfully`);
    });

    window.location.reload();
  };

  return (
    <div>
      <h1>Update a paper</h1>

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
          <FormInput
            label="id"
            type="text"
            value={id}
            onChange={(e) => {
              setId(e.target.value);
            }}
          />

          <FormInput
            label="Course Name"
            type="text"
            value={cName}
            onChange={(e) => {
              setCName(e.target.value);
            }}
          />

          <FormInput
            label="Course Id"
            type="text"
            value={cId}
            onChange={(e) => {
              setCId(e.target.value);
            }}
          />

          <FormInput
            label="Year"
            type="text"
            value={year}
            onChange={(e) => {
              setYear(e.target.value);
            }}
          />

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

          <FormInput
            label="File Name"
            type="text"
            value={fName}
            onChange={(e) => {
              setFName(e.target.value);
            }}
          />

          <FormInput
            label="Topics"
            type="text"
            value={topics}
            onChange={(e) => {
              setTopics(e.target.value);
            }}
          />

          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              label="I verified that all are correct"
            />
          </Form.Group>

          <Button variant="primary" onClick={handleUpdatePaper}>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Update;
