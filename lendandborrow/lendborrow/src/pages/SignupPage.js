import React from "react";
import { Signup } from "../components";
import Header from "../components/Login/Header";

function SignupPage({ title }) {
  return (
    <div>
      <Header title={title} />
      <Signup title={title} />
    </div>
  );
}

export default SignupPage;
