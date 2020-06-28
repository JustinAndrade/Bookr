import axios from "axios";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT";

const BOOKR_API_DOMAIN = process.env.REACT_APP_BOOKR_API_DOMAIN;

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

export const logout = () => dispatch => {
  localStorage.clear();
  dispatch({ type: LOGOUT });
};
