import "./App.css";
import styled, { css } from "styled-components";
import { useState } from "react";

// template string``
// string: "" ''
const Head = styled.div`
margin: 100px auto;
  position: relative;
  width: 800px;
  height: 800px;
  background-color: red;
  border: 30px solid black;
  border-radius: 100%;
`;

const Eye = styled.div` 
  position: absolute;
  top: 80px;
  left: 80px;
  width: 100px;
  height: 80px;
  background-color: brown;
  border-radius: 500%;
  ${({ red }) =>
    red === true &&
    css`
      background-color: greenyellow;
    `}
`;

function App() {
  return (
    <div>
      <Head>
        <Eye red={false} />
        <Eye red={true} />
      </Head>
    </div>
  );
}

export default App;
