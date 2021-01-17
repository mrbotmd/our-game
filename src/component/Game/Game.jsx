import React, { useState } from "react";
import GameSession from "./GameSession";
import GameWindow from "./GameWindow";
import { packOne } from "../../assets/packs/packOne";

export default function Game() {
  const [round, setRound] = useState(0);

  const handeSetRound = () => {
    packOne.round > round && setRound(round + 1);
  };

  return (
    <>
      <GameSession />
      <GameWindow
        gamePack={packOne}
        changeRound={handeSetRound}
        round={round}
      />
    </>
  );
}
