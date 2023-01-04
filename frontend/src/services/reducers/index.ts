import { combineReducers } from "redux";
import { commonReducer } from "./commonReducer";
import { playersReducer } from "./playersReducers";

const rootReducer = combineReducers({
  common: commonReducer,
  players: playersReducer,
});

export default rootReducer;
