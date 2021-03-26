import React, { useContext, useEffect, useState } from "react";
import { Form, Field, Formik } from "formik";
import { getGameSessionsTypes, getGameSessionsCode } from "../../axiosClient";
import { AuthContext } from "../../context/AuthContext";
import { useHistory } from "react-router";

export default function GameSessionsPage() {
  const [auth] = useContext(AuthContext);
  const history = useHistory();
  const [gameSessionsTypes, setGameSessionsTypes] = useState([]);
  console.log(
    "🚀 ~ file: GameSessionsPage.jsx ~ line 7 ~ GameSessionsPage ~ gameSessionsTypes",
    gameSessionsTypes
  );

  useEffect(() => {
    const getSessionsTypes = async () => {
      const typesRes = await getGameSessionsTypes();
      console.log(
        "🚀 ~ file: GameSessionsPage.jsx ~ line 12 ~ getGameSessionsData ~ typesRes",
        typesRes
      );
      // setGameSessionsTypes(typesRes.data.types);
    };
    // getSessionsTypes();
  }, []);

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          password: "",
          type_code: "ref",
          game_pack_id: 1,
          max_players: 3,
        }}
        onSubmit={async (values) => {
          console.log(
            "🚀 ~ file: GameSessionsPage.jsx ~ line 37 ~ GameSessionsPage ~ values",
            values
          );
          // getGameSessionsTypes();
          const gameSessionId = await getGameSessionsCode(
            values,
            auth.accessToken
          );
          console.log(
            "🚀 ~ file: GameSessionsPage.jsx ~ line 48 ~ onSubmit={ ~ gameSessionId",
            gameSessionId
          );
          history.push(`/game/${gameSessionId.data.game_session}`);
        }}
        // enableReinitialize
      >
        {/* {({ values }) => {
          console.log(values);
          return ( */}
        <Form>
          <label htmlFor="name">Имя Сессии</label>
          <Field type="text" name="name" id="session-name" />
          <label htmlFor="password">Пароль</label>
          <Field type="password" name="password" id="password" />
          {/* <label>Игровой пак</label>
              <Field /> */}
          {/* <label htmlFor="type_code">Тип подключения</label> */}
          {/* <Field as="select" name="type_code" id="type_code">
                {gameSessionsTypes.map((type, index) => {
                  return (
                    <Field key={index} as="option" value={type.code}>
                      {type.name}
                    </Field>
                  );
                })}
              </Field> */}
          <button type="submit">Создать</button>
        </Form>
        {/* );
        }} */}
      </Formik>
    </div>
  );
}
