import { combineReducers } from "redux";
import { commonReducer } from "./commonReducer";
import { filtersReducer } from "./filtersReducer";
import { playersReducer } from "./playersReducers";

const rootReducer = combineReducers({
  common: commonReducer,
  players: playersReducer,
  filters: filtersReducer,
});

export default rootReducer;
