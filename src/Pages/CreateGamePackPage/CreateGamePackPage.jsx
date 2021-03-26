import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getGamePackConfig, getGames } from "../../axiosClient";
import GamePackForm from "../../component/GamePack/GamePackForm";
import Login from "../../component/Login/Login";
import { AuthContext } from "../../context/AuthContext";

export default function CreateGamePackPage() {
  const [auth] = useContext(AuthContext);
  const [gamePackConfig, setGamePackConfig] = useState({});
  console.log(
    "🚀 ~ file: CreateGamePackPage.jsx ~ line 11 ~ CreateGamePackPage ~ gamePackConfig",
    gamePackConfig
  );
  const history = useHistory();

  useEffect(() => {
    const fetchGamePackConfig = async () => {
      try {
        const kek = await getGames();
        console.log(
          "🚀 ~ file: CreateGamePackPage.jsx ~ line 21 ~ fetchGamePackConfig ~ kek",
          kek
        );
        if (auth.accessToken === "") {
          return;
        } else {
          const res = await getGamePackConfig(auth.accessToken, "jeopardy");
          setGamePackConfig(JSON.parse(res.data.pack_config));
        }
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchGamePackConfig();
  }, [setGamePackConfig, auth]);

  if (auth.accessToken === "") return <Login />;

  return (
    <div>
      <GamePackForm profile={auth.profile} gamePackConfig={gamePackConfig} />
    </div>
  );
}
