import React from "react";
import { Link } from "react-router-dom";

function Header({ title }) {
  return (
    <div
      style={{
        justifyContent: "space-between",
        display: "flex",
        alignItems: "center",
        flex: 1,
        margin: "auto 20%",
      }}
    >
      <h1>{title}</h1>
      <div>
        <Link to="../login">Login</Link>
        <Link to="../signup" style={{ backgroundColor: "#1DC19F" }}>
          Signup
        </Link>
      </div>
    </div>
  );
}

export default Header;
