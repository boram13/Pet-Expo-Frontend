// const React = require("react");
// const ReactDOM = require("react-dom");
// const { BrowserRouter } = require("react-router-dom");

// require("./index.css");
// const App = require("./App").default;

// ReactDOM.createRoot(document.getElementById("root")).render(
//   React.createElement(React.StrictMode, null,
//     React.createElement(BrowserRouter, null,
//       React.createElement(App, null)
//     )
//   )
// );

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);



