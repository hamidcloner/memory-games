import GlobalStyle from "./globalStyle";
import { Route,Routes } from 'react-router-dom';
// ===== import Main Components ======
import HomePage from './components/homePage/homePage';
import LudoGame from './components/ludo/ludoGame';
import Paint from './components/paint/paint';
import PuzzleGame from './components/puzzle/puzzleGame';
import SudokuGame from './components/sudoku/sudokuGame';
import XOGame from './components/xo/xoGame';


function App() {
  return (
    <>
     
      <GlobalStyle />


      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/xo-game" element={<XOGame />} />
        <Route path="/paint" element={<Paint />} />
        <Route path="/puzzle-game" element={<PuzzleGame />} />
        <Route path="/sudoku-game" element={<SudokuGame />} />
        <Route path="/ludo-game" element={<LudoGame />}/>

      </Routes>
    </>
  
  );
}

export default App;
