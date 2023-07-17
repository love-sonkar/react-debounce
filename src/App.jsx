import React from "react";
import { styled } from "styled-components";
import GlobleStyle from "./GlobalStyle";
import UserSection from "./UserSection";

const App = () => {
  return (
    <AppWrapper>
      <GlobleStyle />
      <UserSection />
    </AppWrapper>
  );
};

export default App;

const AppWrapper = styled.section`
  height: 100vh;
  background-color: #e6e6e6;
  display: flex;
  align-items: center;
  justify-content: center;
`;
