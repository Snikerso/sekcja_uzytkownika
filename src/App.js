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
<<<<<<< HEAD
  top: 80px;
  left: 80px;
  width: 40px;
  height: 40px;
  background-color: black;
=======
>>>>>>> 8874c3b661316b282f70ef54e8a790f60faf073e
  top: 200px;
  left: 200px;
  width: 100px;
  height: 80px;
  background-color: brown;
  border-radius: 500%;
  ${({ red }) =>
    red === true &&
    css`
      background-color: green;
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
