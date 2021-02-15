import reduxPromise from "redux-promise";
import { applyMiddleware, combineReducers, createStore } from "redux";
import reduxThunk from "redux-thunk";

import reducers from "../reducers";

const middle = [reduxPromise, reduxThunk];

const rootReducer = combineReducers({
  reducers,
});
export default createStore(rootReducer, applyMiddleware(...middle));
