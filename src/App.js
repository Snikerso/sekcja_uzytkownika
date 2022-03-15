import './App.css';
import styled, {css} from "styled-components"
import { useState } from 'react';


const Square = styled.div`
  width: 100px;
  height: 100px;
  border: 10px solid red;
  background-color: black;
  
  ${({cssIndex}) => cssIndex && css` 
     width: 200px;
  `}

`

const Button = styled.button`
  width: 100px;
  height: 100px;
  background-color: yellow;


`

const useStateNasz = () => {
  const [cssIndex, setCssIndex] = useState(1)

  const handleChange = () =>{
    setCssIndex(cssIndex + 1)
  }

  return [cssIndex, setCssIndex, handleChange]
} 

function App() {
  const [zmiennaZwracana, FunkcjaZwracana, handleChange ] = useStateNasz()

  return (
    <div id='wrapper'>
      <Square cssIndex={zmiennaZwracana}></Square>
      <Square cssIndex={zmiennaZwracana} isBlack={true}>2</Square>
      <Square cssIndex={zmiennaZwracana}>3</Square>

      <Button onClick={() => handleChange() }>{zmiennaZwracana}</Button>
    </div>
  );
}

export default App;
