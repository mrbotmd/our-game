import React, { useState, useEffect } from "react";
import QuestionWindow from "../Question/QuestionWindow";

export default function GameWindow(props) {
  const { gamePack } = props;
  console.log(props);
  const [isOnQestion, setIsOnQestion] = useState(false);
  const [currentRound, setCurrentRound] = useState(props.round);
  const [questionsToShow, setQuestionsToShow] = useState({});
  console.log(
    "🚀 ~ file: GameWindow.jsx ~ line 9 ~ GameWindow ~ questionsToShow",
    questionsToShow
  );

  useEffect(() => {
    setCurrentRound(props.round);
  }, [props.round]);
  useEffect(() => {
    console.log(props.round);
    // if (currentRound === 0) {
    //   return setQuestionsToShow({
    //     name: gamePack.name,
    //     description: gamePack.description,
    //     author: gamePack.author,
    //   })
    // }
    props.round === 0
      ? setQuestionsToShow({
          name: gamePack.name,
          description: gamePack.description,
          author: gamePack.author,
        })
      : setQuestionsToShow(gamePack.content[props.round - 1]);
  }, [gamePack, props.round, currentRound]);

  const handleSetIsOnQuestion = () => {
    setIsOnQestion(!isOnQestion);
  };
  return (
    <div>
      <QuestionWindow
        isOnQestion={isOnQestion}
        toggleIsOnQuestion={handleSetIsOnQuestion}
        round={currentRound}
        questions={questionsToShow}
      />
      <button onClick={props.changeRound}>next round</button>
    </div>
  );
}
