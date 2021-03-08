import React, { useState, useEffect } from "react";
import { getGames } from "../../axiosClient";

export default function GamesPage() {
  const [gamesList, setGamesList] = useState([]);
  console.log(
    "🚀 ~ file: GamesPage.jsx ~ line 6 ~ GamesPage ~ gamesList",
    gamesList
  );

  useEffect(() => {
    const getGamesList = async () => {
      const list = await getGames();
      list.status === 200 && setGamesList(list.data.games);
    };
    getGamesList();
  }, []);

  return <div></div>;
}
