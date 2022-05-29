import React from "react";

function Blubs({ title, value }) {
  return (
    <div
      style={{
        padding: 20,
        borderRadius: 10,
        backgroundColor: "#303030",
        width: "100%",
        margin: "10px",
      }}
    >
      <div>{title}</div>
      <h1>{value}</h1>
    </div>
  );
}

export default Blubs;
