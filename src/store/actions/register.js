import axios from "axios";

export const REGISTRATION_START = "REGISTRATION_START";
export const REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS";
export const REGISTRATION_FAILURE = "REGISTRATION_FAILURE";

const BOOKR_API_DOMAIN = process.env.REACT_APP_BOOKR_API_DOMAIN;

export const register = authData => async dispatch => {
  dispatch({ type: REGISTRATION_START });
  try {
    const { data } = await axios.post(
      `${BOOKR_API_DOMAIN}/api/users/register`,
      authData
    );
    if (data.id && data.username && data.password) {
      dispatch({ type: REGISTRATION_SUCCESS });
    } else {
    }
  } catch (error) {
    dispatch({ type: REGISTRATION_FAILURE });
  }
};
