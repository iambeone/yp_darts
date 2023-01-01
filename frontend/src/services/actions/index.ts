import type { TCommonActions } from "./commonActions";
import type { TPlayersActions } from "./playersActions";

export type IApplicationActions = TCommonActions | TPlayersActions;

export * from "./commonActions";
export * from "./playersActions";
