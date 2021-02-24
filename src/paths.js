const BASE_URL = "http://5.63.112.35:5010/";
// get - game_id - packs list
// post - add new game pack
// put - update existing pack -> send game_pack_id, name, description, packet
const GAME_PACKS = "game-packs";
// post
const USER_REGISTER = "register";
// post
const USER_AUTH = "auth";
// post
const USER_SESSIONS = "user-sessions";
// post - open game session ->
// header: access_token,
// body: game_pack_id, name(имя сессии), password(пароль сессии необязательно), type_id(тип игровой сессии)(1),
const GAME_SESSIONS = "game-sessions";
// get
const GAME_SESSIONS_TYPES = "game-sessions/types";
// отправить токен вернет 200
const USER_LOGOUT = "user-sessions/logout";
// get
const ALL_GAMES = "/games";
// get - accessToken & game code
const CREATE_GAME_PACK = "/games/pack-config";
const OPEN_SOKET_CONNECTION = "/ws";
// post -> header: access_token
//      -> body: game_session:"", name(имя пользователя): "", type_id(тип участника): "",
const GAME_PARTICIPANTS = "/game-participants";
// get -> game_id: ""
const GAME_PARTICIPANTS_TYPES = "/game-participants/types";

export {
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
};
