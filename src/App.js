import "./App.css";
import styled, { css } from "styled-components";
import { useState } from "react";

// template string``
// string: "" ''
const Head = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  background-color: pink;
  border: 2px solid black;
  border-radius: 100%;
`;

const Eye = styled.div`
  position: absolute;
  top: 80px;
  left: 160px;
  width: 40px;
  height: 40px;
  background-color: greenyellow;
  border-radius: 500%;
  ${({ red }) =>
    red === true &&
    css`
      background-color: greenyellown;
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
