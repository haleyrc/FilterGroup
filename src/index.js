import React from "react";
import { render } from "react-dom";

import { Vendors } from "./Vendors";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <Vendors />
  </div>
);

render(<App />, document.getElementById("root"));
