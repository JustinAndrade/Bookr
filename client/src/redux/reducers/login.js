export const LOGOUT = "LOGOUT";
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = authData => async dispatch => {
  dispatch({ type: LOGIN_START });
  try {
    const { data } = await axios.post(
      `${BOOKR_API_DOMAIN}/api/users/login`,
      authData
    );
    const { token } = data;
    localStorage.setItem(
      "auth",
      JSON.stringify({
        username: authData.username,
        token
      })
    );
    dispatch({
      type: LOGIN_SUCCESS,
      payload: { authToken: token, username: authData.username }
    });
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, payload: error.response.data.error });
  }
};
