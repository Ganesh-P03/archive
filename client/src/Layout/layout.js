import React from "react";
import NavBar from "../components/NavBar";
import styled from "styled-components";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
};

export default Layout;

const Main = styled.div`
  background-color: #fdf6f0;
  min-height: calc(100vh - 112px);
  width: 100%;

  padding: 10px;
`;
