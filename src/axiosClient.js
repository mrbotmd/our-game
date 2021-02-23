import axios from "axios";
import {
  BASE_URL,
  GAME_PACKS,
  USER_REGISTER,
  USER_AUTH,
  USER_SESSIONS,
  GAME_SESSIONS,
} from "./paths";

export async function startUserSession() {
  const access_token = await axios({
    method: "POST",
    url: BASE_URL + USER_SESSIONS,
  })
    .then((res) => {
      console.log(res);
      return res.data.access_token;
    })
    .catch((err) => console.error(err));
  return access_token;
}

export async function registerUser(accessToken, regData) {
  const register = await axios({
    url: BASE_URL + USER_REGISTER,
    method: "POST",
    data: regData,
    headers: {
      access_token: accessToken,
    },
  })
    .then((res) => {
      console.log(
        "🚀 ~ file: axiosClient.js ~ line 39 ~ registerUser ~ res",
        res
      );
      return res;
    })
    .catch((err) => err.response && console.log(err.response.data));
  return register;
}
export async function authUser(accessToken, authData) {
  console.log(
    "🚀 ~ file: axiosClient.js ~ line 44 ~ authUser ~ authData",
    authData
  );
  const { emailLogin, passwordLogin } = authData;
  const auth = await axios({
    url: BASE_URL + USER_AUTH,
    method: "POST",
    data: { email: emailLogin, password: passwordLogin },
    headers: {
      access_token: accessToken,
    },
  })
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => console.error(err));
  return auth;
}
