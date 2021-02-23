import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import { authUser } from "../../axiosClient";

export default function Register() {
  const [accessToken] = useState(window.localStorage.getItem("accessToken"));

  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={async (values) => {
          await authUser(accessToken, values);
        }}
      >
        <Form>
          <label htmlFor="email">Email: </label>
          <Field
            id="email"
            name="email"
            type="email"
            placeholder="email@example.com"
            required
          />

          <label htmlFor="password">Password: </label>
          <Field
            id="password"
            name="password"
            type="password"
            placeholder="************"
            required
          />
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  );
}
