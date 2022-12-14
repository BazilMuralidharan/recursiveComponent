import React from "react";
import { familyTree } from "./data";
import Family from "./Family";
// import "./styles.css";

export default function App() {
  // console.log(familyTree);
  return (
    <div className="App">
      <Family familyTree={familyTree} />
      {/* <h2>{JSON.stringify(familyTree)}</h2> */}
    </div>
  );
}
