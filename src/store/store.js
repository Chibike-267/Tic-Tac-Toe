import { configureStore } from "@reduxjs/toolkit";
import gameReducer from '../features/reducer/gameReducer';

export const store = configureStore({
  reducer: {
    game: gameReducer,
  },
});

export default store;

