import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import { registerUser } from "../../axiosClient";

export default function Register() {
  const [accessToken] = useState(window.localStorage.getItem("accessToken"));

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={async (values) => {
          await registerUser(accessToken, values);
        }}
      >
        <Form>
          <label htmlFor="name">Username: </label>
          <Field
            id="name"
            name="name"
            type="text"
            placeholder="BigBrain1337"
            required
          />

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
          <button type="submit">register</button>
        </Form>
      </Formik>
    </div>
  );
}
