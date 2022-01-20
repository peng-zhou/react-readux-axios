import { GET_TEASERS } from "../constants/actionTypes";

const initialState = {
  teasers: [],
  loading: true,
};

const teasersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TEASERS:
      return {
        ...state,
        teasers: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default teasersReducer;
