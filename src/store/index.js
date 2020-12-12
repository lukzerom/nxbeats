import { applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";
import promiseMiddleware from "redux-promise";
import appReducers from "./reducers/index";

const ReduxStore = () => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    appReducers,
    composeEnhancers(applyMiddleware(promiseMiddleware, logger))
  );

  return store;
};

export default ReduxStore;
