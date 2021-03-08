import React from "react";
import Link from "../Link/Link";
import headerImage from "../../assets/images/header-image.jpg";

export default function Header() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${headerImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <h1 style={{ fontSize: "3rem", color: "white" }}>
          Играй в игру с друзьями!
        </h1>
        <Link button="true" to="/game">
          Играть
        </Link>
        <Link button="true" to="/create-gamepack">
          Создать пакет
        </Link>
        <Link button="true" to="/register">
          register
        </Link>
        <Link button="true" to="/games">
          All Games
        </Link>
      </div>
    </header>
  );
}
