import React, { useState } from "react";
import GameSession from "./GameSession";
import GameWindow from "./GameWindow";

export default function Game() {
  const [round, setRound] = useState(0);

  return (
    <>
      <GameSession />
    </>
  );
}
