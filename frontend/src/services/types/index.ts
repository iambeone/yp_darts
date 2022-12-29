import { ActionCreator } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import store from "../store";
import { TCommonActions } from "../actions";

export type AppDispatch = typeof store.dispatch;

type AppActions = TCommonActions;

export type ActionThunk = ActionCreator<
  ThunkAction<void, RootState, unknown, AppActions>
>;

export type DispatchThunk = ThunkDispatch<RootState, void, AppActions>;

export type RootState = ReturnType<typeof store.getState>;
