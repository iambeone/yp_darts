import {
  GET_PLAYERS_REQUEST,
  GET_PLAYERS_SUCCESS,
  GET_PLAYERS_FAILED,
  SET_SEARCH,
  DELETE_PLAYER_REQUEST,
  DELETE_PLAYER_SUCCESS,
  DELETE_PLAYER_FAILED,
  GET_PLAYER_REQUEST,
  GET_PLAYER_SUCCESS,
  GET_PLAYER_FAILED,
  SET_CURRENT_PLAYER_ID,
  SET_ACCEPT_DELETE_OPEN,
  SET_CONFIRM_DELETE_OPEN,
  SET_CONTEXT_MENU_OPEN,
  PATCH_PLAYER_REQUEST,
  PATCH_PLAYER_SUCCESS,
  PATCH_PLAYER_FAILED,
} from "./actionsTypes";
import {
  baseUrl,
  tokenRequestOptions,
  checkResponse,
  tokenRequestOptionsPatch,
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

interface ISetSearch {
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

interface IgetPlayerRequest {
  readonly type: typeof GET_PLAYER_REQUEST;
}

interface IgetPlayerSuccess {
  readonly type: typeof GET_PLAYER_SUCCESS;
  readonly payload: { data: Tplayers };
}

interface IgetPlayerFailed {
  readonly type: typeof GET_PLAYER_FAILED;
  readonly payload: { error: {} };
}

interface IsetCurrentPlayerID {
  readonly type: typeof SET_CURRENT_PLAYER_ID;
  readonly payload: { id: number };
}

interface IsetAcceptDeleteOpen {
  readonly type: typeof SET_ACCEPT_DELETE_OPEN;
  readonly payload: boolean;
}

interface IsetConfirmDeleteOpen {
  readonly type: typeof SET_CONFIRM_DELETE_OPEN;
  readonly payload: boolean;
}

interface IsetContextMenuOpen {
  readonly type: typeof SET_CONTEXT_MENU_OPEN;
  readonly payload: { anchor: HTMLButtonElement | null };
}

interface IpatchPlayerRequest {
  readonly type: typeof PATCH_PLAYER_REQUEST;
}

interface IpatchPlayerSuccess {
  readonly type: typeof PATCH_PLAYER_SUCCESS;
  readonly payload: { data: any };
}

interface IpatchPlayerFailed {
  readonly type: typeof PATCH_PLAYER_FAILED;
  readonly payload: { error: {} };
}

export type TPlayersActions =
  | IfetchPlayersRequest
  | IfetchPlayersSuccess
  | IfetchPlayersFailed
  | IdeletePlayerRequest
  | IdeletePlayerSuccess
  | IdeletePlayerFailed
  | ISetSearch
  | IsetCurrentPlayerID
  | IsetAcceptDeleteOpen
  | IsetConfirmDeleteOpen
  | IsetContextMenuOpen
  | IpatchPlayerRequest
  | IpatchPlayerSuccess
  | IpatchPlayerFailed
  | IgetPlayerRequest
  | IgetPlayerSuccess
  | IgetPlayerFailed;

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

export const setCurrentPlayerID = (id: number): TPlayersActions => ({
  type: SET_CURRENT_PLAYER_ID,
  payload: { id },
});

export const getPlayerRequest = (): TPlayersActions => ({
  type: GET_PLAYER_REQUEST,
});

export const getPlayerSuccess = (data: Tplayers): TPlayersActions => ({
  type: GET_PLAYER_SUCCESS,
  payload: { data },
});

export const getPlayerFailed = (error: {}): TPlayersActions => ({
  type: GET_PLAYER_FAILED,
  payload: { error },
});

export const setAcceptDeleteOpen = (payload: boolean): TPlayersActions => ({
  type: SET_ACCEPT_DELETE_OPEN,
  payload,
});

export const setConfirmDeleteOpen = (payload: boolean): TPlayersActions => ({
  type: SET_CONFIRM_DELETE_OPEN,
  payload,
});

export const patchPlayerRequest = (): TPlayersActions => ({
  type: PATCH_PLAYER_REQUEST,
});

export const patchPlayerSuccess = (data: any): TPlayersActions => ({
  type: PATCH_PLAYER_SUCCESS,
  payload: { data },
});

export const patchPlayerFailed = (error: {}): TPlayersActions => ({
  type: PATCH_PLAYER_FAILED,
  payload: { error },
});

export const setContextMenuOpen = (
  anchor: HTMLButtonElement | null,
): TPlayersActions => ({
  type: SET_CONTEXT_MENU_OPEN,
  payload: { anchor },
});

export const getPlayers: AppThunk<Promise<IApplicationActions>> =
  (payload: string) => (dispatch: AppDispatch) => {
    dispatch(fetchPlayersRequest());
    return fetch(
      `${baseUrl}/participants/${payload}`,
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
        return res;
      })
      .catch((error) => dispatch(deletePlayerFailed(error)));
  };

export const getPlayer: AppThunk<Promise<IApplicationActions>> =
  (id: number) => (dispatch: AppDispatch) => {
    dispatch(getPlayerRequest());
    return fetch(`${baseUrl}/participants/${id}`, tokenRequestOptions("GET"))
      .then(checkResponse)
      .then((res) => {
        dispatch(getPlayerSuccess(res));
        return res;
      })
      .catch((error) => dispatch(getPlayerFailed(error)));
  };

export const patchPlayer: AppThunk<Promise<IApplicationActions>> =
  (id: string, data: any) => (dispatch: AppDispatch) => {
    console.log(id);
    console.log(data);
    dispatch(patchPlayerRequest());
    return fetch(
      `${baseUrl}/participants/${id}`,
      tokenRequestOptionsPatch("PATCH", data),
    )
      .then(checkResponse)
      .then((json) => {
        dispatch(patchPlayerSuccess(json));
        return json;
      })
      .catch((error) => dispatch(patchPlayerFailed(error)));
  };
