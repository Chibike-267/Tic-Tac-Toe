export const CLICK_SQUARE = 'CLICK_SQUARE';
export const RESET_GAME = 'RESET_GAME';

export const clickSquare = (index) => ({
  type: CLICK_SQUARE,
  payload: index,
});

export const resetGame = () => ({
  type: RESET_GAME,
});
