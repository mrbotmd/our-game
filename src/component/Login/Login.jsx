import { Formik, Field, Form } from "formik";
import { authUser, startUserSession } from "../../axiosClient";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { handleUserAuth } from "../../helpers";

export default function Login() {
  const [, dispatch] = useContext(AuthContext);
  const history = useHistory();
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={async (values) => {
          await handleUserAuth(
            values,
            "LOGIN",
            authUser,
            startUserSession,
            dispatch
          );
          history.location.pathname === "/login" && history.push("/");
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
