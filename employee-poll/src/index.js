import React from "react";
// import ReactDOM from "react-dom/client";
import { createStore } from "redux";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./css/index.css";
import App from "./components/App";
import reducer from "./reducers";
import middleware from "./middleware";
import { BrowserRouter } from "react-router-dom";
// import { BrowserRouter as Router } from "react-router-dom";

export const store = createStore(reducer, middleware);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
);
