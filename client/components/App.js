import React from "React";
import Header from "./Header";
import * as fs from "fs";

const App = (props) => {
  console.log("fs:", fs);
  return (
    <div className="container">
      <Header />
      {props.children}
    </div>
  );
};

export default App;
