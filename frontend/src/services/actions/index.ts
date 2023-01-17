import type { TCommonActions } from "./commonActions";
import type { TPlayersActions } from "./playersActions";
import type { TFiltersActions } from "./filtersActions";
// import type { TPlayerActions } from "./playerActions";

export type IApplicationActions =
  | TCommonActions
  | TPlayersActions
  | TFiltersActions;
// | TPlayerActions;

export * from "./commonActions";
export * from "./playersActions";
export * from "./filtersActions";
// export * from "./playerActions";
