import { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import Game from "./component/Game/Game";
import GamePackForm from "./component/GamePack/GamePackForm";
import Header from "./component/Header/Header";
import axios from "axios";

function App() {
  const [accessToken, setAccessToken] = useState(
    window.localStorage.getItem("accessToken") || ""
  );

  useEffect(() => {
    axios({
      method: "POST",
      url: "http://5.63.112.35:5010/user-sessions",
    })
      .then((res) => {
        if (accessToken === "") {
          window.localStorage.setItem("accessToken", res.data.access_token);
          setAccessToken(res.data.access_token);
        }
      })
      .catch((err) => console.log(err));
  }, [accessToken]);

  return (
    <div className="App">
      <Route path="/" component={Header} exact />
      <Route path="/game" component={Game} exact />
      <Route path="/create-new-gamepack" component={GamePackForm} exact />
    </div>
  );
}

export default App;
