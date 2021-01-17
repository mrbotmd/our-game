import React, { useState, useEffect } from "react";

export default function QuestionWindow(props) {
  const { questions, round } = props;
  console.log(
    "🚀 ~ file: QuestionWindow.jsx ~ line 4 ~ QuestionWindow ~ props",
    props
  );
  return (
    <div
      style={{
        margin: "0 auto",
        width: "600px",
        height: "400px",
        border: "solid 2px black",
        backgroundColor: "blueviolet",
      }}
    >
      <ul>
        {round > 0 ? (
          questions.theme.map((line, i) => (
            <li key={line.name}>
              <p>{line.name}</p>
              <ul>
                {line.questions.map((q, i) => (
                  <li key={`${i}` + q.description}>{q.price}</li>
                ))}
              </ul>
            </li>
          ))
        ) : (
          <div>
            <h2>{questions.name}</h2>
            <p>{questions.description}</p>
            <p>{questions.author}</p>
          </div>
        )}
      </ul>
    </div>
  );
}
