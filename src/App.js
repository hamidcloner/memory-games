import GlobalStyle from "./globalStyle";
import { Route,Routes } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import * as theme from './theme';
// ===== import Main Components ======
import HomePage from './components/homePage/homePage';
import LudoGame from './components/ludo/ludoGame';
import Paint from './components/paint/paint';
import PuzzleGame from './components/puzzle/puzzleGame';
import SudokuGame from './components/sudoku/sudokuGame';
import XOGame from './components/xo/xoGame';
import SnakeLadderGame from './components/snakeLadderGame/SnakeLadderGame';
import ChessGame from './components/chessGame/ChessGame';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
      
        <GlobalStyle />


        <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path="/xo-game" element={<XOGame />} />
          <Route path="/paint" element={<Paint />} />
          <Route path="/puzzle-game" element={<PuzzleGame />} />
          <Route path="/sudoku-game" element={<SudokuGame />} />
          <Route path="/ludo-game" element={<LudoGame />}/>
          <Route path="/snake-ladder-game" element={<SnakeLadderGame />}/>
          <Route path="/chess-game" element={<ChessGame />} />

        </Routes>
      </>
    </ThemeProvider>
  
  );
}

export default App;
