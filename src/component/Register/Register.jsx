import { Formik, Field, Form } from "formik";
import { registerUser, startUserSession } from "../../axiosClient";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { handleUserAuth } from "../../helpers";

export default function Register() {
  const [, dispatch] = useContext(AuthContext);
  const history = useHistory();
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={async (values) => {
          await handleUserAuth(
            values,
            "LOGIN",
            registerUser,
            startUserSession,
            dispatch
          );
          history.location.pathname === "/register" && history.push("/");
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
