import { Route } from "react-router-dom";
import Game from "./component/Game/Game";
import GamePackForm from "./component/GamePack/GamePackForm";
import Header from "./component/Header/Header";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Header} exact />
      <Route path="/game" component={Game} exact />
      <Route path="/create-new-gamepack" component={GamePackForm} exact />
    </div>
  );
}

export default App;
