import axios from "axios";
import {
  BASE_URL,
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
  GAME_PARTICIPANTS,
  GAME_PARTICIPANTS_TYPES,
  OPEN_SOKET_CONNECTION,
} from "./paths";

export async function startUserSession() {
  const access_token = await axios({
    method: "POST",
    baseURL: BASE_URL,
    url: USER_SESSIONS,
  })
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => console.error(err));
  return access_token;
}

export async function registerUser(accessToken, regData) {
  const register = await axios({
    baseURL: BASE_URL,
    url: USER_REGISTER,
    method: "POST",
    data: regData,
    headers: {
      access_token: accessToken,
    },
  })
    .then((res) => {
      return res;
    })
    .catch((err) => err.response && console.log(err.response.data));
  return register;
}
export async function authUser(accessToken, authData) {
  const auth = await axios({
    baseURL: BASE_URL,
    url: USER_AUTH,
    method: "POST",
    data: authData,
    headers: {
      access_token: accessToken,
    },
  })
    .then((res) => {
      return res;
    })
    .catch((err) => err.response && console.log(err.response.data));
  return auth;
}

export async function logoutUser(accessToken) {
  const logout = await axios({
    baseURL: BASE_URL,
    url: USER_LOGOUT,
    method: "POST",
    headers: {
      access_token: accessToken,
    },
  })
    .then((res) => {
      return res;
    })
    .catch((err) => err.response && console.log(err.response.data));
  return logout;
}

export async function getGamePackConfig(accessToken, gameCode) {
  const gamePack = await axios({
    baseURL: BASE_URL,
    url: CREATE_GAME_PACK,
    method: "GET",
    params: { code: gameCode },
    headers: {
      access_token: accessToken,
    },
  })
    .then((res) => {
      return JSON.parse(res.data.pack_config);
    })
    .catch((err) => err.response && console.log(err.response.data));
  return gamePack;
}

export async function getGamePacks(accessToken, gameCode) {
  console.log(gameCode);
  const gamePack = await axios({
    method: "GET",
    baseURL: BASE_URL,
    url: GAME_PACKS,
    headers: {
      access_token: accessToken,
    },
  })
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => err.response && console.log(err.response.data));
  return gamePack;
}

export async function setGamePack(accessToken, packet) {
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
  console.log(
    "🚀 ~ file: axiosClient.js ~ line 118 ~ setGamePack ~ packet",
    packet
  );
  const pack = JSON.stringify({
    auto_price,
    auto_special,
    has_super,
    image,
    rounds,
  });
  const gamePack = await axios({
    method: "POST",
    baseURL: BASE_URL,
    url: GAME_PACKS,
    data: {
      name,
      description,
      game_code,
      packet: pack,
    },
    headers: {
      access_token: accessToken,
    },
  })
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => err.response && console.log(err.response.data));
  return gamePack;
}

export async function getGames(accessToken, gameCode) {
  console.log(gameCode);
  const games = await axios({
    method: "GET",
    baseURL: BASE_URL,
    url: ALL_GAMES,
    headers: {
      access_token: accessToken,
    },
  })
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => console.error(err));
  return games;
}

export async function getUserProfile(accessToken) {
  console.log(
    "🚀 ~ file: axiosClient.js ~ line 180 ~ getUserProfile ~ accessToken",
    accessToken
  );
  console.log("run");
  const userProfile = await axios({
    method: "GET",
    baseURL: BASE_URL,
    url: USER_PROFILE,
    headers: {
      access_token: accessToken,
    },
  })
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => console.error(err));
  return userProfile;
}
