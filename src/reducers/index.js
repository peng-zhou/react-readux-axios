import { combineReducers } from "redux";
import teasersReducer from "./teasersReducer";

export default combineReducers({
  teasers: teasersReducer,
});
