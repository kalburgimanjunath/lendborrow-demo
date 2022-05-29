import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
function Login({ title }) {
  return (
    <div>
      <h1>Log in</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <label>Email address</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            <label>Password</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <button
              type="submit"
              disabled={isSubmitting}
              style={{ backgroundColor: "#1DC19F" }}
            >
              Submit
            </button>
            <Link to="">forgot your password?</Link>
            or Sign in with Google
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Login;
