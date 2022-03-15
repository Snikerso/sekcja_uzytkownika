import './App.css';
import styled, {css} from "styled-components"


const Square = styled.div`
  width: 100px;
  
  height: 100px;
  border: 10px solid red;
  background-color: black;
  
  ${({cssIndex}) => cssIndex  && css` 
     width: 200px;
  `}

`

function App() {


  return (
    <div id='wrapper'>
      <Square cssIndex={true}>1</Square>
      <Square isBlack={true}>2</Square>
      <Square >3</Square>
    </div>
  );
}

export default App;
