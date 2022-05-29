import React from "react";
import { Login } from "../components/index";
import Header from "../components/Login/Header";

function LoginPage({ title }) {
  return (
    <div>
      <Header title={title} />
      <Login title={title} />
    </div>
  );
}

export default LoginPage;
