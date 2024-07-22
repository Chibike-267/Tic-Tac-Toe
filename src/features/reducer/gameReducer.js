import { CLICK_SQUARE, RESET_GAME } from '../action/gameAction';

export const initialState = {
  squares: Array(9).fill(null),
  xIsNext: true,
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLICK_SQUARE: {
     const newSquares = [...state.squares];
      newSquares[action.payload] = state.xIsNext ? 'X' : 'O';
      return {
        ...state,
        squares: newSquares,
        xIsNext: !state.xIsNext,
      };
    }
    case RESET_GAME:
      return initialState;
    default:
      return state;
  }
};

export default gameReducer;
