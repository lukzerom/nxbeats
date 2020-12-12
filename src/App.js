import React from "react";
import { Provider } from "react-redux";
import Routes from "./routes";
import ReduxStore from "./store/index";

const App = () => {
  return (
    <Provider store={ReduxStore()}>
      <Routes />
    </Provider>
  );
};

export default App;
