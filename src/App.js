import React from "react";
import Form from "./component/Form";
import Card from "./component/Card";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <Form />
      {/* <Card /> */}
    </div>
  );
}

export default App;
