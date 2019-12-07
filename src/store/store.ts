import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from "./ducks";

const baseReducer = combineReducers(reducers);
const store = createStore(baseReducer, applyMiddleware(thunk));

export default store;