import React from "react";
import { createStore } from "redux";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./css/index.css";
import App from "./components/App";
import reducer from "./reducers";
import middleware from "./middleware";
import { BrowserRouter } from "react-router-dom";
// import { BrowserRouter as Router } from "react-router-dom";

const store = createStore(reducer, middleware);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>      
    </Provider>

  </React.StrictMode>,
  document.getElementById("root")
);
