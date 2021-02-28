import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import { authUser } from "../../axiosClient";

export default function Login({ handleUserAuth }) {
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={async (values) => {
          handleUserAuth(values, authUser);
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
