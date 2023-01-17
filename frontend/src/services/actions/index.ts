import type { TCommonActions } from "./commonActions";
import type { TPlayersActions } from "./playersActions";
import type { TFiltersActions } from "./filtersActions";

export type IApplicationActions =
  | TCommonActions
  | TPlayersActions
  | TFiltersActions;

export * from "./commonActions";
export * from "./playersActions";
export * from "./filtersActions";
