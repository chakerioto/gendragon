//@ts-nocheck
import { combineReducers } from "redux";
import authReducer from './slices/AuthSlice';

const rootReducer = combineReducers({
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
