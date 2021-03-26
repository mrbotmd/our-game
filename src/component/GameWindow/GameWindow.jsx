import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import { openWebSocket } from "../../axiosClient";
import { AuthContext } from "../../context/AuthContext";

export default function GameWindow(props) {
  const [auth] = useContext(AuthContext);
  const params = useParams();

  console.log(
    "🚀 ~ file: GameWindow.jsx ~ line 6 ~ GameWindow ~ params",
    params
  );

  useEffect(() => {
    const socket = openWebSocket(auth.accessToken);

    const openSocketConfig = {
      type: "system",
      method: "session",
      access_token: auth.accessToken,
    };

    const addPlayerConfig = {
      type: "game",
      method: "add_player",
      session_code: params.gameSessionsId,
      body: {
        name: auth.profile.name,
        type_code: "unassigned",
      },
    };

    console.log(
      "🚀 ~ file: GameWindow.jsx ~ line 17 ~ useEffect ~ socket",
      socket
    );
    socket.then((socket) => {
      console.log(
        "🚀 ~ file: GameWindow.jsx ~ line 27 ~ useEffect ~ socket",
        socket
      );
      socket.onopen = (e) => {
        console.log(
          "🚀 ~ file: GameWindow.jsx ~ line 17 ~ socket.onopen ~ e",
          e
        );
        socket.send(JSON.stringify(openSocketConfig));
        socket.send(JSON.stringify(addPlayerConfig));
      };
      socket.onmessage = (e) => console.log(e);
      socket.onerror = (e) => console.error(e);
    });
  }, []);

  return <div></div>;
}
