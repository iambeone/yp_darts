import { combineReducers } from "redux";
import { commonReducer } from "./commonReducer";
import { filtersReducer } from "./filtersReducer";
import { playersReducer } from "./playersReducers";
import { playerReducer } from "./playerReducers";

const rootReducer = combineReducers({
  common: commonReducer,
  players: playersReducer,
  filters: filtersReducer,
  player: playerReducer,
});

export default rootReducer;
