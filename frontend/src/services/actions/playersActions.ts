import {
  GET_PLAYERS_REQUEST,
  GET_PLAYERS_SUCCESS,
  GET_PLAYERS_FAILED,
} from "./actionsTypes";
import { baseUrl, checkResponse } from "../../utils/constants";
import type { IApplicationActions } from ".";
import type { AppThunk, AppDispatch } from "../store";

interface IfetchPlayersRequest {
  readonly type: typeof GET_PLAYERS_REQUEST;
}

interface IfetchPlayersSuccess {
  readonly type: typeof GET_PLAYERS_SUCCESS;
  readonly payload: { data: { data: [] } };
}

interface IfetchPlayersFailed {
  readonly type: typeof GET_PLAYERS_FAILED;
  readonly payload: { error: {} };
}

export type TPlayersActions =
  | IfetchPlayersRequest
  | IfetchPlayersSuccess
  | IfetchPlayersFailed;

export const fetchPlayersRequest = (): TPlayersActions => ({
  type: GET_PLAYERS_REQUEST,
});

export const fetchPlayersSuccess = (data: { data: [] }): TPlayersActions => ({
  type: GET_PLAYERS_SUCCESS,
  payload: { data },
});

export const fetchPlayersFailed = (error: {}): TPlayersActions => ({
  type: GET_PLAYERS_FAILED,
  payload: { error },
});

export const getPlayers: AppThunk<Promise<IApplicationActions>> =
  () => (dispatch: AppDispatch) => {
    dispatch(fetchPlayersRequest());
    return fetch(`${baseUrl} + /ingredients`)
      .then(checkResponse)
      .then((json) => {
        dispatch(fetchPlayersSuccess(json));
        return json;
      })
      .catch((error) => dispatch(fetchPlayersFailed(error)));
  };
