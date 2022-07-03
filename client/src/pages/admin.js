import React, { Component, useState } from "react";
import api from "../api";
import { storage } from "../storage/base";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

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
      setCName(null);
      setCId(null);
      setYear(null);
      setUrl(null);
      setFName(null);
      setTopics(null);
    });
  };

  return (
    <Wrapper>
      <Title>Upload to Archive!!</Title>

      <Label>Course Name: </Label>
      <InputText
        type="text"
        value={cName}
        onChange={(e) => {
          setCName(e.target.value);
        }}
      />

      <br></br>

      <Label>Course Id: </Label>
      <InputText
        type="text"
        value={cId}
        onChange={(e) => {
          setCId(e.target.value);
        }}
      />

      <br></br>

      <Label>Year: </Label>
      <InputText
        type="text"
        value={year}
        onChange={(e) => {
          setYear(e.target.value);
        }}
      />
      <br></br>

      <input type="file" onChange={handleChangeInputFile} />

      <Label>url: </Label>
      <InputText
        type="text"
        value={url}
        onChange={(e) => {
          setUrl(e.target.value);
        }}
      />
      <br></br>
      <Label>file Name: </Label>
      <InputText
        type="text"
        value={fName}
        onChange={(e) => {
          setFName(e.target.value);
        }}
      />
      <br></br>
      <Label>Topics: </Label>
      <InputText
        type="text"
        value={topics}
        onChange={(e) => {
          setTopics(e.target.value);
        }}
      />
      <br></br>

      <Button onClick={handleIncludePaper}>Add Paper</Button>
      {/* <CancelButton href={"/movies/list"}>Cancel</CancelButton> */}
    </Wrapper>
  );
};

export default PaperInsert;
