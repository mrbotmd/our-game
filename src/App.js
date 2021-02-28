import { useState, useEffect, useContext } from "react";
import { Route } from "react-router-dom";
import Game from "./component/Game/Game";
import GamePackForm from "./component/GamePack/GamePackForm";
import Header from "./component/Header/Header";
import AuthPage from "./Pages/AuthPage/AuthPage";
import { startUserSession } from "./axiosClient";
import { AuthContext } from "./context/AuthContext";
import Nav from "./component/Nav/Nav";
import CreateGamePackPage from "./Pages/CreateGamePackPage/CreateGamePackPage";

function App() {
  return (
    <div className="App">
      <Nav />
      <button onClick={() => window.localStorage.removeItem("accessToken")}>
        clear token
      </button>
      {/* <button onClick={() => console.log(isLoggedIn)}>isLoggedIn?</button> */}
      <Route path="/" component={Header} exact />
      <Route path="/game" component={Game} exact />
      <Route path="/create-gamepack" component={CreateGamePackPage} exact />
      <Route path="/register" component={AuthPage} exact />
      <Route path="/login" component={AuthPage} exact />
      <Route path="/logout" component={AuthPage} exact />
    </div>
  );
}

export default App;
