import { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import Game from "./component/Game/Game";
import GamePackForm from "./component/GamePack/GamePackForm";
import Header from "./component/Header/Header";
import axios from "axios";
import Register from "./Pages/Register/Register";
import { BASE_URL, USER_SESSIONS } from "./paths";

function App() {
  const [accessToken, setAccessToken] = useState(
    window.localStorage.getItem("accessToken") || ""
  );

  useEffect(() => {
    axios({
      method: "POST",
      url: BASE_URL + USER_SESSIONS,
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
      <button onClick={() => window.localStorage.removeItem("accessToken")}>
        clear token
      </button>
      <Route path="/" component={Header} exact />
      <Route path="/game" component={Game} exact />
      <Route path="/create-new-gamepack" component={GamePackForm} exact />
      <Route path="/register" component={Register} exact />
    </div>
  );
}

export default App;
