import { Formik, Field, Form } from "formik";
import { authUser } from "../../axiosClient";
import { useHistory } from "react-router-dom";

export default function Login({ handleUserAuth }) {
  const history = useHistory();
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={async (values) => {
          await handleUserAuth(values, authUser);
          history.push("/");
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
