export async function handleUserAuth(
  requestData,
  authType,
  authRequest,
  tokenRequest,
  contextDispatch
) {
  if (authType === "LOGIN") {
  }
  const accessToken = await tokenRequest();
  if (authType === "LOGOUT" || accessToken.status === 200) {
    const response = await authRequest(
      accessToken.data.access_token,
      authType === "LOGIN" && requestData
    );
    if (response.status === 200) {
      contextDispatch({
        type: authType,
        payload: { accessToken: accessToken.data.access_token },
      });
    }
  }
}
