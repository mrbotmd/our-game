import axios from "axios";
import {
  BASE_URL,
  GAME_PACKS,
  CREATE_GAME_PACK,
  USER_REGISTER,
  USER_AUTH,
  USER_LOGOUT,
  USER_SESSIONS,
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
    method: "POST",
    data: { gameCode: gameCode },
    headers: {
      access_token: accessToken,
    },
  })
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => console.error(err));
  return gamePack;
}
