import React from "react";
import ReactDOM from "react-dom";
import Parent from "./props/Parent"

const App = () => {
  return( <Parent>Hi, there!</Parent>)
}

ReactDOM.render(<App />, document.querySelector('#root'))