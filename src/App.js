import React, { Component } from "react";
import "./styles.css";

// import ToReadPage from "./pages/ToReadPage";
// import ToDoPage from "./pages/TodoPage";

import { StopWatch } from "./tutorials/hooks/StopWatch";

export default class App extends Component {
  // const option = "read";
  render() {
    return (
      <div className="App">
        <div
          style={{
            padding: 50,
            textAlign: "left",
            maxWidth: 500,
            margin: "auto"
          }}
        />
        <StopWatch />
        {/* {option === "read" ? <ToReadPage /> : <ToDoPage />} */}
      </div>
    );
  }
}
