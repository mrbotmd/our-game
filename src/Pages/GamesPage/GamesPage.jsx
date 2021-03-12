import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { getGames } from "../../axiosClient";
import { AuthContext } from "../../context/AuthContext";

export default function GamesPage() {
  const [auth, dispatch] = useContext(AuthContext);

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

  if (gamesList.length === 0) return <div>loading...</div>;

  return (
    <div>
      {gamesList.map((game, index) => (
        <div key={index}>
          <Link to={`/games/${game.code}`}>
            <div>
              <img src="" alt="" />
            </div>
          </Link>
          <div>
            <Link to={`/games/${game.code}`}>
              <h2>{game.name}</h2>
            </Link>
            <p>{game.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
