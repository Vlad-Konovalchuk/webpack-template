import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";

ReactDOM.render(
  <div>
    <App />
  </div>,
  document.getElementById("app"),
);

module.hot.accept();
