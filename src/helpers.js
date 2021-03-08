import { startUserSession, getUserProfile } from "./axiosClient";

export async function handleUserAuth(
  requestData,
  authType,
  authRequest,
  contextDispatch
) {
  if (authType === "LOGIN") {
  }
  const accessToken = await startUserSession();
  if (authType === "LOGOUT" || accessToken.status === 200) {
    const response = await authRequest(
      accessToken.data.access_token,
      authType === "LOGIN" && requestData
    );
    if (response.status === 200) {
      const userProfile =
        authType === "LOGIN" &&
        (await getUserProfile(accessToken.data.access_token));
      contextDispatch({
        type: authType,
        payload: {
          accessToken: accessToken.data.access_token,
          profile: authType === "LOGIN" && JSON.stringify(userProfile.data),
        },
      });
    }
  }
}
