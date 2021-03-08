import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, FieldArray } from "formik";
import { AuthContext } from "../../context/AuthContext";
import { setGamePack } from "../../axiosClient";

export default function GamePackForm({ profile, gamePackConfig }) {
  const [auth] = useContext(AuthContext);
  console.log(
    "🚀 ~ file: GamePackForm.jsx ~ line 7 ~ GamePackForm ~ gamePackConfig",
    gamePackConfig
  );
  const isConfigEmpty =
    gamePackConfig &&
    Object.keys(gamePackConfig).length === 0 &&
    gamePackConfig.constructor === Object;
  if (isConfigEmpty) return <div>loading...</div>;
  return (
    <div>
      <Link to="/">go Home</Link>
      <Formik
        enableReinitialize
        initialValues={{ ...gamePackConfig }}
        onSubmit={async (values) => {
          console.log(
            "🚀 ~ file: GamePackForm.jsx ~ line 19 ~ GamePackForm ~ values",
            values
          );
          delete values.author;

          const ok = await setGamePack(auth.accessToken, values);
          console.log(ok);
          // getGames(auth.accessToken, "jeopardy");
        }}
      >
        {({ values }) => {
          console.log(
            "🚀 ~ file: GamePackForm.jsx ~ line 21 ~ GamePackForm ~ values",
            values
          );
          values.game_code = "jeopardy";
          return (
            <Form>
              <h1>
                <label htmlFor="name">Имя игрового пака</label>
              </h1>
              <Field
                type="text"
                name="name"
                id="name"
                placeholder="Имя игрового пака"
                required
              />
              <h3>
                <label htmlFor="description">Описание</label>
              </h3>
              <Field
                as="textarea"
                type="text"
                name="description"
                id="description"
                placeholder="Описание"
                required
              />
              <h3>
                <label htmlFor="theme">Тема пакета</label>
              </h3>
              <Field
                type="text"
                name="theme"
                id="theme"
                placeholder="Тема игрового пака"
                required
              />
              <h3>
                <label htmlFor="image"></label>
              </h3>
              <Field
                type="text"
                name="image"
                id="image"
                placeholder="http://"
              />
              {values.image !== "" && (
                <img
                  style={{ width: "600px", height: "400px" }}
                  src={values.image}
                  alt=""
                />
              )}
              <div>
                <p>
                  <label htmlFor="auto_price">Автонастройка цены</label>
                </p>
                <Field name="auto_price" type="checkbox" />
              </div>
              <div>
                <p>
                  <label htmlFor="auto_special">
                    Автонастройка особых вопросов
                  </label>
                </p>
                <Field name="auto_special" type="checkbox" />
              </div>
              <div>
                <p>
                  <label htmlFor="has_super">
                    Сделать последний раунд суперигрой. Оставит только первый
                    вопрос в темах раунда
                  </label>
                </p>
                <Field name="has_super" type="checkbox" />
              </div>

              {values.rounds && values.rounds.length > 0 && (
                <FieldArray
                  name="rounds"
                  render={(arrayHelpers) => (
                    <div>
                      {values.rounds.map((round, index) => {
                        return (
                          <div key={index}>
                            <div>
                              <h1>{`Раунд №${index + 1}`}</h1>
                              {index !== 0 && (
                                <button
                                  onClick={() =>
                                    arrayHelpers.remove(index, round)
                                  }
                                >
                                  - рануд
                                </button>
                              )}
                              {index === values.rounds.length - 1 && (
                                <button
                                  onClick={() =>
                                    arrayHelpers.push({
                                      ...gamePackConfig.rounds[0],
                                    })
                                  }
                                >
                                  + раунд
                                </button>
                              )}
                            </div>
                            <h2>
                              <label
                                htmlFor={`rounds.${[index]}.name`}
                              >{`Название раунда №${round.number}`}</label>
                            </h2>
                            <Field
                              type="text"
                              name={`rounds.${[index]}.name`}
                              id={`rounds.${[index]}.name`}
                              placeholder={`Раунд ${round.number}`}
                            />
                            <FieldArray name={`rounds.${[index]}.themes`}>
                              {(arrayHelpers) => (
                                <div>
                                  {round.themes.map((theme, tIndex) => {
                                    console.log(
                                      "🚀 ~ file: GamePackForm.jsx ~ line 161 ~ {round.themes.map ~ theme",
                                      theme
                                    );
                                    theme.id = `${tIndex + 1}`;
                                    return (
                                      <div key={tIndex}>
                                        <div style={{ display: "flex" }}>
                                          <h1>Тема №{tIndex + 1}</h1>
                                          {tIndex !== 0 && (
                                            <button
                                              onClick={() =>
                                                arrayHelpers.remove(
                                                  tIndex,
                                                  theme
                                                )
                                              }
                                            >
                                              - тема
                                            </button>
                                          )}
                                          {tIndex ===
                                            round.themes.length - 1 && (
                                            <button
                                              onClick={() =>
                                                arrayHelpers.push({
                                                  ...gamePackConfig.rounds[0]
                                                    .themes[0],
                                                })
                                              }
                                            >
                                              + тема
                                            </button>
                                          )}
                                        </div>
                                        <div>
                                          <div>
                                            <h2>
                                              <label
                                                htmlFor={`rounds.${[
                                                  index,
                                                ]}.themes.${[tIndex]}.name`}
                                              >{`Имя темы №${
                                                tIndex + 1
                                              }`}</label>
                                            </h2>
                                            <Field
                                              type="text"
                                              name={`rounds.${[
                                                index,
                                              ]}.themes.${[tIndex]}.name`}
                                              id={`rounds.${[index]}.themes.${[
                                                tIndex,
                                              ]}.name`}
                                              placeholder={`Тема №${
                                                tIndex + 1
                                              }`}
                                            />
                                          </div>
                                          <div>
                                            <h3>
                                              <label
                                                htmlFor={`rounds.${[
                                                  index,
                                                ]}.themes.${[
                                                  tIndex,
                                                ]}.media.url`}
                                              ></label>
                                            </h3>
                                            <Field
                                              type="text"
                                              name={`rounds.${[
                                                index,
                                              ]}.themes.${[tIndex]}.media.url`}
                                              id="image"
                                              placeholder="http://"
                                            />
                                            {theme.media.url !== "" &&
                                              ((theme.media.type = "img"),
                                              (
                                                <img
                                                  style={{
                                                    width: "600px",
                                                    height: "400px",
                                                  }}
                                                  src={theme.media.url}
                                                  alt=""
                                                />
                                              ))}
                                          </div>
                                        </div>
                                        <FieldArray
                                          name={`rounds.${[index]}.themes.${[
                                            tIndex,
                                          ]}.questions`}
                                        >
                                          {(arrayHelpers) => (
                                            <div>
                                              {theme.questions.map(
                                                (question, qIndex) => {
                                                  question.id = `${qIndex + 2}`;
                                                  return (
                                                    <div key={qIndex}>
                                                      <div
                                                        style={{
                                                          display: "flex",
                                                        }}
                                                      >
                                                        <h1>
                                                          Вопрос №{qIndex + 1}
                                                        </h1>
                                                        {qIndex !== 0 && (
                                                          <button
                                                            onClick={() =>
                                                              arrayHelpers.remove(
                                                                qIndex,
                                                                question
                                                              )
                                                            }
                                                          >
                                                            - вопрос
                                                          </button>
                                                        )}
                                                        {qIndex ===
                                                          theme.questions
                                                            .length -
                                                            1 && (
                                                          <button
                                                            onClick={() =>
                                                              arrayHelpers.push(
                                                                {
                                                                  ...gamePackConfig
                                                                    .rounds[0]
                                                                    .themes[0]
                                                                    .questions[0],
                                                                }
                                                              )
                                                            }
                                                          >
                                                            + вопрос
                                                          </button>
                                                        )}
                                                      </div>
                                                      <div>
                                                        <h2>
                                                          <label
                                                            htmlFor={`rounds.${[
                                                              index,
                                                            ]}.themes.${[
                                                              tIndex,
                                                            ]}.questions.${[
                                                              qIndex,
                                                            ]}.text`}
                                                          >
                                                            Текст вопроса
                                                          </label>
                                                        </h2>
                                                        <Field
                                                          type="text"
                                                          as="textarea"
                                                          name={`rounds.${[
                                                            index,
                                                          ]}.themes.${[
                                                            tIndex,
                                                          ]}.questions.${[
                                                            qIndex,
                                                          ]}.text`}
                                                          id={`question-text-${tIndex}-${qIndex}`}
                                                          placeholder="Текст вопроса"
                                                          required
                                                        />
                                                        <h2>
                                                          <label
                                                            htmlFor={`rounds.${[
                                                              index,
                                                            ]}.themes.${[
                                                              tIndex,
                                                            ]}.questions.${[
                                                              qIndex,
                                                            ]}.answer`}
                                                          >
                                                            Ответ на вопрос
                                                          </label>
                                                        </h2>
                                                        <Field
                                                          type="text"
                                                          name={`rounds.${[
                                                            index,
                                                          ]}.themes.${[
                                                            tIndex,
                                                          ]}.questions.${[
                                                            qIndex,
                                                          ]}.answer`}
                                                          id={`question-answer-${tIndex}-${qIndex}`}
                                                          placeholder="Ответ на вопрос"
                                                          required
                                                        />
                                                      </div>
                                                      <div>
                                                        <div>
                                                          <h3>
                                                            <label
                                                              htmlFor={`rounds.${[
                                                                index,
                                                              ]}.themes.${[
                                                                tIndex,
                                                              ]}.questions.${[
                                                                qIndex,
                                                              ]}.media.url`}
                                                            >
                                                              Картинка вопроса
                                                            </label>
                                                          </h3>
                                                          <Field
                                                            type="text"
                                                            name={`rounds.${[
                                                              index,
                                                            ]}.themes.${[
                                                              tIndex,
                                                            ]}.questions.${[
                                                              qIndex,
                                                            ]}.media.url`}
                                                            id={`question-media-${tIndex}-${qIndex}`}
                                                            placeholder="http://"
                                                          />
                                                          {question.media
                                                            .url !== "" &&
                                                            ((question.media.type =
                                                              "img"),
                                                            (
                                                              <img
                                                                style={{
                                                                  width:
                                                                    "600px",
                                                                  height:
                                                                    "400px",
                                                                }}
                                                                src={
                                                                  question.media
                                                                    .url
                                                                }
                                                                alt=""
                                                              />
                                                            ))}
                                                        </div>
                                                        <div>
                                                          <h2>
                                                            <label
                                                              htmlFor={`rounds.${[
                                                                index,
                                                              ]}.themes.${[
                                                                tIndex,
                                                              ]}.questions.${[
                                                                qIndex,
                                                              ]}.price`}
                                                            >
                                                              Цена вопроса
                                                            </label>
                                                          </h2>
                                                          <Field
                                                            type="number"
                                                            name={`rounds.${[
                                                              index,
                                                            ]}.themes.${[
                                                              tIndex,
                                                            ]}.questions.${[
                                                              qIndex,
                                                            ]}.price`}
                                                            id={``}
                                                            placeholder="200"
                                                            required
                                                          />
                                                        </div>
                                                        <div>
                                                          <h2>
                                                            <label
                                                              htmlFor={`rounds.${[
                                                                index,
                                                              ]}.themes.${[
                                                                tIndex,
                                                              ]}.questions.${[
                                                                qIndex,
                                                              ]}.special`}
                                                            ></label>
                                                          </h2>
                                                          <Field
                                                            as="select"
                                                            name={`rounds.${[
                                                              index,
                                                            ]}.themes.${[
                                                              tIndex,
                                                            ]}.questions.${[
                                                              qIndex,
                                                            ]}.special`}
                                                          >
                                                            <option value=""></option>
                                                            <option value="cat">
                                                              Кот в мешке
                                                            </option>
                                                            <option value="auction">
                                                              Аукцион
                                                            </option>
                                                            <option value="force-to-give">
                                                              Нужно отдать
                                                            </option>
                                                            <option value="force-to-answer">
                                                              Нужно ответить
                                                            </option>
                                                            <option value="free">
                                                              Без риска
                                                            </option>
                                                          </Field>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  );
                                                }
                                              )}
                                            </div>
                                          )}
                                        </FieldArray>
                                      </div>
                                    );
                                  })}
                                </div>
                              )}
                            </FieldArray>
                          </div>
                        );
                      })}
                    </div>
                  )}
                />
              )}
              <button type="submit">Отправить</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
