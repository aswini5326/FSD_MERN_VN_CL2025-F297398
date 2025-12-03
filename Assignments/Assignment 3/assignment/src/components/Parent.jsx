import React from "react";
import Child from "./Child";

const Parent = () => {
  const showAlert = () => {
    alert("Button clicked inside the Child Component!");
  };
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h3>Parent to Child Function Passing</h3>
      <Child onButtonClick={showAlert} />
    </div>
  );
};

export default Parent;
