import {
  GET_PLAYERS_REQUEST,
  GET_PLAYERS_SUCCESS,
  GET_PLAYERS_FAILED,
  SET_SEARCH,
  DELETE_PLAYER_REQUEST,
  DELETE_PLAYER_SUCCESS,
  DELETE_PLAYER_FAILED,
} from "./actionsTypes";
import {
  baseUrl,
  tokenRequestOptions,
  checkResponse,
} from "../../utils/constants";
import type { IApplicationActions } from ".";
import type { AppThunk, AppDispatch } from "../store";
import { Tplayers } from "../types";

interface IfetchPlayersRequest {
  readonly type: typeof GET_PLAYERS_REQUEST;
}

interface IfetchPlayersSuccess {
  readonly type: typeof GET_PLAYERS_SUCCESS;
  readonly payload: { data: Tplayers[] };
}

interface IfetchPlayersFailed {
  readonly type: typeof GET_PLAYERS_FAILED;
  readonly payload: { error: {} };
}

export interface ISetSearch {
  readonly type: typeof SET_SEARCH;
  readonly payload: string;
}

interface IdeletePlayerRequest {
  readonly type: typeof DELETE_PLAYER_REQUEST;
}

interface IdeletePlayerSuccess {
  readonly type: typeof DELETE_PLAYER_SUCCESS;
}

interface IdeletePlayerFailed {
  readonly type: typeof DELETE_PLAYER_FAILED;
  readonly payload: { error: {} };
}

export type TPlayersActions =
  | IfetchPlayersRequest
  | IfetchPlayersSuccess
  | IfetchPlayersFailed
  | IdeletePlayerRequest
  | IdeletePlayerSuccess
  | IdeletePlayerFailed
  | ISetSearch;

export const fetchPlayersRequest = (): TPlayersActions => ({
  type: GET_PLAYERS_REQUEST,
});

export const fetchPlayersSuccess = (data: Tplayers[]): TPlayersActions => ({
  type: GET_PLAYERS_SUCCESS,
  payload: { data },
});

export const fetchPlayersFailed = (error: {}): TPlayersActions => ({
  type: GET_PLAYERS_FAILED,
  payload: { error },
});

export const setSearch = (payload: string): ISetSearch => ({
  type: SET_SEARCH,
  payload,
});

export const deletePlayerRequest = (): TPlayersActions => ({
  type: DELETE_PLAYER_REQUEST,
});

export const deletePlayerSuccess = (): TPlayersActions => ({
  type: DELETE_PLAYER_SUCCESS,
});

export const deletePlayerFailed = (error: {}): TPlayersActions => ({
  type: DELETE_PLAYER_FAILED,
  payload: { error },
});

export const getPlayers: AppThunk<Promise<IApplicationActions>> =
  (payload: string) => (dispatch: AppDispatch) => {
    dispatch(fetchPlayersRequest());
    return fetch(
      `${baseUrl}/participants${payload}`,
      tokenRequestOptions("GET"),
    )
      .then(checkResponse)
      .then((json) => {
        dispatch(fetchPlayersSuccess(json));
        return json;
      })
      .catch((error) => dispatch(fetchPlayersFailed(error)));
  };

export const deletePlayer: AppThunk<Promise<IApplicationActions>> =
  (id: number) => (dispatch: AppDispatch) => {
    dispatch(deletePlayerRequest());
    return fetch(`${baseUrl}/participants/${id}`, tokenRequestOptions("DELETE"))
      .then(checkResponse)
      .then((res) => {
        dispatch(fetchPlayersSuccess(res));
        getPlayers();
        return res;
      })
      .catch((error) => dispatch(deletePlayerFailed(error)));
  };
