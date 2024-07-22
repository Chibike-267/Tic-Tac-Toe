import { useDispatch, useSelector } from 'react-redux';
import { calculateWinner } from '../util/util';
import { clickSquare, resetGame } from '../features/action/gameAction';
import { GameContainer, Board, Square, Status, ResetButton } from './style/gameStyle';

const Game = () => {
  const { squares, xIsNext } = useSelector((state) => state.game);
  const dispatch = useDispatch();

  const handleClick = (i) => {
    if (calculateWinner(squares) || squares[i]) return;
    dispatch(clickSquare(i));
  };

  const renderSquare = (i) => {
    return (
      <Square key={i} onClick={() => handleClick(i)}>
        {squares[i]}
      </Square>
    );
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (squares.every(square => square)) {
    status = 'Tie';
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  return (
    <GameContainer>
      <h3>Please manage my styling, i am not a website designer, 
        rather i am developer, i write functional code. Shalom.</h3>
      <h1>Tic Tac Toe</h1>
      <Board>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(i => renderSquare(i))}
      </Board>
      <Status>{status}</Status>
      <ResetButton className="reset" onClick={() => dispatch(resetGame())}>Reset</ResetButton>
    </GameContainer>
  );
};

export default Game;
