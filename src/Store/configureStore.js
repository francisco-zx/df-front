import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import Reducer from '../Reducers/Reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  //Store Creation

  const store = createStore(
    Reducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
