import { combineReducers } from '@reduxjs/toolkit';
import todoReducer from './todoReducer';
import appReducer from './appReducer';

const rootReducer = combineReducers({
  todo: todoReducer,
  app: appReducer
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
