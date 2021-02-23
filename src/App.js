import { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import Game from "./component/Game/Game";
import GamePackForm from "./component/GamePack/GamePackForm";
import Header from "./component/Header/Header";
// import axios from "axios";
// import { BASE_URL, USER_SESSIONS } from "./paths";
import Register from "./Pages/Register/Register";
import { startUserSession } from "./axiosClient";
import { IsLoggedInProvider } from "./context/IsLoggedInContext";

function App() {
  const [accessToken, setAccessToken] = useState(
    window.localStorage.getItem("accessToken") || ""
  );
  console.log("🚀 ~ file: App.js ~ line 13 ~ App ~ accessToken", accessToken);

  useEffect(() => {
    const getAccessToken = async () => {
      try {
        const access_token = await startUserSession();
        if (accessToken === "") {
          window.localStorage.setItem("accessToken", access_token);
          setAccessToken(access_token);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getAccessToken();
  }, [accessToken]);

  return (
    <IsLoggedInProvider>
      <div className="App">
        <button onClick={() => window.localStorage.removeItem("accessToken")}>
          clear token
        </button>
        <Route path="/" component={Header} exact />
        <Route path="/game" component={Game} exact />
        <Route path="/create-new-gamepack" component={GamePackForm} exact />
        <Route path="/register" component={Register} exact />
      </div>
    </IsLoggedInProvider>
  );
}

export default App;
