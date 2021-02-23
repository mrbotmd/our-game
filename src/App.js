import { useState, useEffect, useContext } from "react";
import { Route } from "react-router-dom";
import Game from "./component/Game/Game";
import GamePackForm from "./component/GamePack/GamePackForm";
import Header from "./component/Header/Header";
import AuthPage from "./Pages/AuthPage/AuthPage";
import { startUserSession } from "./axiosClient";
import { IsLoggedInContext } from "./context/IsLoggedInContext";

function App() {
  const [accessToken, setAccessToken] = useState(
    window.localStorage.getItem("accessToken") || ""
  );
  console.log("🚀 ~ file: App.js ~ line 13 ~ App ~ accessToken", accessToken);
  const { isLoggedIn, setIsLoggedIn } = useContext(IsLoggedInContext);

  useEffect(() => {
    const getAccessToken = async () => {
      try {
        const access_token = await startUserSession();
        if (accessToken === "") {
          window.localStorage.setItem("accessToken", access_token);
          setAccessToken(access_token);
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getAccessToken();
  }, [accessToken, setIsLoggedIn]);

  return (
    <div className="App">
      <button onClick={() => window.localStorage.removeItem("accessToken")}>
        clear token
      </button>
      <button onClick={() => console.log(isLoggedIn)}>isLoggedIn?</button>
      <Route path="/" component={Header} exact />
      <Route path="/game" component={Game} exact />
      <Route path="/create-new-gamepack" component={GamePackForm} exact />
      <Route path="/register" component={AuthPage} exact />
      <Route path="/login" component={AuthPage} exact />
      <Route path="/logout" component={AuthPage} exact />
    </div>
  );
}

export default App;
