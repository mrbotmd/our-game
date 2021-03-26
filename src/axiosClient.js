import axios from "axios";
import {
  BASE_URL,
  SOCKET_URL,
  GAME_PACKS,
  CREATE_GAME_PACK,
  USER_REGISTER,
  USER_AUTH,
  USER_LOGOUT,
  USER_SESSIONS,
  USER_PROFILE,
  GAME_SESSIONS,
  GAME_SESSIONS_TYPES,
  ALL_GAMES,
  GAME_SESSIONS_PLAYERS,
  GAMES_PLAYERS_TYPES,
  WS_CONNECTION,
  SESSION_CONFIG,
  USERS,
} from "./paths";

async function baseRequest(type, url, data, accessToken) {
  console.log("run");
  const config = {
    baseURL: BASE_URL,
    url: url,
    method: type,
  };
  type !== "get"
    ? (config.headers =
        { "Content-Type": "application/json" } && accessToken !== undefined
          ? (config.headers = { ...config.headers, access_token: accessToken })
          : config.headers)
    : accessToken !== undefined
    ? (config.headers = { access_token: accessToken })
    : (config.headers = {});

  if (type !== "get" && data !== undefined) config.data = data;
  if (type === "get" && data !== undefined) config.params = data;
  const request = await axios(config)
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => err.response && console.log(err.response.data));
  return request;
}

export const startUserSession = () => baseRequest("post", USER_SESSIONS);

export const registerUser = (accessToken, regData) =>
  baseRequest("post", USER_REGISTER, regData, accessToken);

export const authUser = (accessToken, authData) =>
  baseRequest("post", USER_AUTH, authData, accessToken);

export const logoutUser = (accessToken) =>
  baseRequest("post", USER_LOGOUT, undefined, accessToken);

export const getUsersByName = (name) => baseRequest("get", USERS, { ...name });

export const getUserById = (id) => baseRequest("get", USERS, { id });

export const getGamePackConfig = (accessToken, gameCode) =>
  baseRequest("get", CREATE_GAME_PACK, { code: gameCode }, accessToken);

export const getGamePacks = (accessToken, gameCode) =>
  baseRequest("get", GAME_PACKS, { gameCode: gameCode }, accessToken);

export const setGamePack = (accessToken, packet) => {
  const {
    auto_price,
    auto_special,
    has_super,
    name,
    description,
    game_code,
    image,
    rounds,
  } = packet;
  const pack = JSON.stringify({
    auto_price,
    auto_special,
    has_super,
    image,
    rounds,
  });
  return baseRequest(
    "post",
    GAME_PACKS,
    { name, description, game_code, packet: pack },
    accessToken
  );
};

export const getGames = (gameCode) =>
  baseRequest("get", ALL_GAMES, { code: gameCode });

export const getUserProfile = (accessToken) =>
  baseRequest("get", USER_PROFILE, undefined, accessToken);

export const getGameSessionsTypes = () =>
  baseRequest("get", GAME_SESSIONS_TYPES);

export const getGameSessionsCode = (data, accessToken) =>
  baseRequest("post", GAME_SESSIONS, data, accessToken);

export async function openWebSocket(accessToken) {
  console.log(
    "🚀 ~ file: axiosClient.js ~ line 204 ~ openWebSocket ~ accessToken",
    accessToken
  );
  const data = {
    type: "system",
    method: "session",
    access_token: accessToken,
  };
  console.log(
    "🚀 ~ file: axiosClient.js ~ line 213 ~ openWebSocket ~ data",
    data
  );

  const socket = new WebSocket(SOCKET_URL + WS_CONNECTION);
  // socket.onopen = (e) => {
  //   socket.send(JSON.stringify(data));
  //   // socket.send(data);
  //   console.log(e);
  // };
  // socket.onmessage = (e) => {
  //   console.log(e);
  // };

  // socket.onerror = (e) => {
  //   console.log(e);
  // };

  // socket.onclose = (e) => {
  //   console.log(e);
  // };

  return socket;
}
