import axios from "axios";

export const API_REQUEST_START = "API_REQUEST_START";
export const API_REQUEST_SUCCESS = "API_REQUEST_SUCCESS";
export const API_REQUEST_FAILURE = "API_REQUEST_FAILURE";

const BOOKR_API_DOMAIN = process.env.REACT_APP_BOOKR_API_DOMAIN;

export const getBooks = () => async dispatch => {
  dispatch({ type: API_REQUEST_START });
  try {
    const { data } = await axios.get(`${BOOKR_API_DOMAIN}/api/books`);
    dispatch({ type: API_REQUEST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: API_REQUEST_FAILURE, payload: error.response.data.error });
  }
};

export const deleteBook = bookId => async dispatch => {
  dispatch({ type: API_REQUEST_START });
  try {
    const { data } = await axios.delete(
      `${BOOKR_API_DOMAIN}/api/books/${bookId}`
    );
    dispatch({ type: API_REQUEST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: API_REQUEST_FAILURE, payload: error.response.data.error });
  }
};

export const addReview = (bookId, review) => async dispatch => {
  dispatch({ type: API_REQUEST_START });
  try {
    const { token } = JSON.parse(localStorage.getItem("auth"));
    await axios.post(
      `${BOOKR_API_DOMAIN}/api/reviews/books/${bookId}`,
      {
        book_id: bookId,
        ...review
      },
      {
        headers: {
          Authorization: token,
          "Content-Type": "application/json"
        }
      }
    );
    dispatch({ type: API_REQUEST_SUCCESS });
  } catch (error) {
    dispatch({ type: API_REQUEST_FAILURE, payload: error.response.data.error });
  }
};

export const deleteReview = reviewId => async dispatch => {
  dispatch({ type: API_REQUEST_START });
  try {
    await axios.delete(`${BOOKR_API_DOMAIN}/api/reviews/${reviewId}`);
    dispatch({ type: API_REQUEST_SUCCESS });
  } catch (error) {
    dispatch({ type: API_REQUEST_FAILURE, payload: error.response.data.error });
  }
};

export const editReview = (reviewId, newReview) => async dispatch => {
  dispatch({ type: API_REQUEST_START });
  try {
    await axios.put(`${BOOKR_API_DOMAIN}/api/reviews/${reviewId}`, newReview);
    dispatch({ type: API_REQUEST_SUCCESS });
  } catch (error) {
    dispatch({ type: API_REQUEST_FAILURE, payload: error.response.data.error });
  }
};
