import React, { useState, useEffect, useContext } from "react";
import { useHistory, useParams } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import { getGames } from "../../axiosClient";

export default function GamePage() {
  const [auth] = useContext(AuthContext);
  const history = useHistory();
  const params = useParams();
  const { game: gameCode } = params;
  const [game, setGame] = useState({});
  console.log("🚀 ~ file: GamePage.jsx ~ line 12 ~ GamePage ~ game", game);

  useEffect(() => {
    const getGame = async () => {
      const game = await getGames(auth.accessToken, gameCode);
      setGame(game.data.games[0]);
    };
    getGame();
  }, [auth.accessToken, gameCode]);

  return <div></div>;
}
