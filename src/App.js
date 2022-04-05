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
<<<<<<< HEAD
  left: 160px;
  width: 40px;
  height: 40px;
  background-color: black;
=======
  left: 80px;
  width: 100px;
  height: 80px;
  background-color: brown;
>>>>>>> 88cad96febb1b6316a7e24bdcec8012d91e2ff46
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
