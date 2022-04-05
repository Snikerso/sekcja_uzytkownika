import "./App.css";
import styled, { css } from "styled-components";
import { useState } from "react";

// template string``
// string: "" ''
const Head = styled.div`
  margin: 100px auto;
  position: relative;
  width: 300px;
  height: 300px;
  background-color: green;
  border: 2px solid black;
  border-radius: 100%;
`;

const Eye = styled.div` 
  position: absolute;
  top: 80px;
  left: 80px;
  width: 40px;
  height: 40px;
  background-color: black;
  border-radius: 500%;
  ${({ red }) =>
    red === true &&
    css`
      background-color: red;
    `}
`;
const Body = styled.div`
position: absolute;
top: 180px;
left: 180px;
width: 140px;
background-color: pink;
border-radius: 50%`

function App() {
  return (
    <div>
      <Head>
        <Eye red={false} />
        <Body>
          
        </Body>
        <Eye red={true} />
      </Head>
    </div>
  );
}

export default App;
