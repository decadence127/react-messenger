import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./reducers/userSlice";
const rootReducer = combineReducers({
  userReducer,
});

export default configureStore({
  reducer: rootReducer,
});
