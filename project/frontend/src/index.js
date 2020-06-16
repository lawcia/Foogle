import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import configureStore from "./redux/configureStore";
import { Provider as ReduxProvider } from "react-redux";
import "./index.css";

const store = configureStore();

const wrapper = document.getElementById("app");
wrapper
  ? ReactDOM.render(
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>,
      wrapper
    )
  : null;
