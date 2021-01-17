import { Route } from "react-router-dom";
import Game from "./component/Game/Game";
import Header from "./component/Header/Header";

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Header />
      </Route>
      <Route exact path="/game" component={Game} />
    </div>
  );
}

export default App;
