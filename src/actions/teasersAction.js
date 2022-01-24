import { GET_TEASERS, TEASERS_ERROR } from "../constants/actionTypes";
import { API_JSON_BASE } from "../config";
import axios from "axios";

export const getTeasers = () => async (dispatch) => {
  try {
    const res = await axios.get(`${API_JSON_BASE}/data`);

    dispatch({
      type: GET_TEASERS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: TEASERS_ERROR,
      payload: console.log(e),
    });
  }
};
