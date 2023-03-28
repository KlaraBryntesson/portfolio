import React from "react";
import { Formik } from "formik";
import { useContext } from "react";
import { SomeContext } from "./SomeContext";

function LoginComponent() {
  const adminUser = useContext(SomeContext);
  return (
    <Formik
      initialValues={{ userName: "", password: "" }}
      onSubmit={(values) => {
        if (
          values.userName === adminUser.userName &&
          values.password === adminUser.password
        ) {
          console.log(`Välkommen ${adminUser.userName}`);
        }
      }}
    >
      {({ handleChange, handleSubmit, values }) => (
        <form onSubmit={handleSubmit}>
          <label>
            Username
            <input
              name="userName"
              value={values.userName}
              onChange={handleChange}
              type="text"
            />
          </label>
          <label>
            Password
            <input
              name="password"
              value={values.password}
              onChange={handleChange}
              type="text"
            />
          </label>
          <button type="submit">Logga in</button>
        </form>
      )}
    </Formik>
  );
}

export default LoginComponent;
