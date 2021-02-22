import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import axios from "axios";
import { BASE_URL, REGISTER } from "../../paths";
import { useHistory } from "react-router-dom";

export default function Register() {
  const [accessToken] = useState(window.localStorage.getItem("accessToken"));
  const history = useHistory();
  console.log(
    "🚀 ~ file: Register.jsx ~ line 7 ~ Register ~ accessToken",
    accessToken
  );
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={async (values) => {
          console.log(values);
          const valuesToStr = JSON.stringify(values);
          console.log(typeof valuesToStr);
          console.log(
            "🚀 ~ file: Register.jsx ~ line 23 ~ onSubmit={ ~ valuesToStr",
            valuesToStr
          );
          axios({
            url: BASE_URL + REGISTER,
            method: "POST",
            data: valuesToStr,
            headers: {
              access_token: accessToken,
            },
          })
            .then((res) => console.log(res))
            .then(async () =>
              setTimeout(() => {
                history.push("/");
              }, 2000)
            )
            .catch((err) => console.log(err));
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
