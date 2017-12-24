import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import user from "../modules/user";

export default function configureStore(initialState) {
  const rootReducer = combineReducers({
    user
  });

  const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

  return store;
}