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
const Body = styled.div`
position: absolute;
top: 180px;
left: 180px;
width: 140px;
height: 140px;
background-color: pink;
border-radius: 50%`

const Nose = styled.div`
  margin: 100px auto;
  position: relative;
  width: 70px;
  height: 70px;
  background-color: orange;
  border: 2px solid black;
`
function App() {
  return (
    <div>
      <Head>
        <Eye red={false} />
        <Nose/>
        <Body>

        </Body>
        <Eye red={true} />
      </Head>
    </div>
  );
}

export default App;
