import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import { getUsersByName } from "../../axiosClient";

export default function UserSearch() {
  const [typing, setTyping] = useState(false);
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
        }}
        onSubmit={async (values) => {
          getUsersByName(values);
        }}
      >
        {({ handleChange }) => {
          return (
            <Form>
              <label htmlFor="name">Поиск по имени </label>
              <Field
                id="name"
                name="name"
                type="text"
                placeholder="Вася Пупкин"
                onChange={async (e) => {
                  handleChange(e);

                  if (!typing) {
                    setTyping(true);
                    setTimeout(() => {
                      getUsersByName(e.target.value);
                      setTyping(false);
                    }, 3000);
                  }
                }}
                required
              />
              <button type="submit">Найти пользователя</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
