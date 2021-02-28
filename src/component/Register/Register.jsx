import React, { useContext, useState } from "react";
import { Formik, Field, Form } from "formik";
import { startUserSession, registerUser } from "../../axiosClient";
import { AuthContext } from "../../context/AuthContext";

export default function Register({ handleUserAuth }) {
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={async (values) => {
          handleUserAuth(values, registerUser);
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
