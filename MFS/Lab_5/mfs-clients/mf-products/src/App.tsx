import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Products from "./Products";

const App = () => (
  <div>
    <Products />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
