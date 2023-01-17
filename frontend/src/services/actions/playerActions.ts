import {
  GET_PLAYER_REQUEST,
  GET_PLAYER_SUCCESS,
  GET_PLAYER_FAILED,
  PATCH_PLAYER_REQUEST,
  PATCH_PLAYER_SUCCESS,
  PATCH_PLAYER_FAILED,
} from "./actionsTypes";
import {
  baseUrl,
  tokenRequestOptions,
  checkResponse,
} from "../../utils/constants";
import type { IApplicationActions } from ".";
import type { AppThunk, AppDispatch } from "../store";

interface IfetchPlayerRequest {
  readonly type: typeof GET_PLAYER_REQUEST;
}

interface IfetchPlayerSuccess {
  readonly type: typeof GET_PLAYER_SUCCESS;
  readonly payload: { data: any };
}

interface IfetchPlayerFailed {
  readonly type: typeof GET_PLAYER_FAILED;
  readonly payload: { error: {} };
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

export type TPlayerActions =
  | IfetchPlayerRequest
  | IfetchPlayerSuccess
  | IfetchPlayerFailed
  | IpatchPlayerRequest
  | IpatchPlayerSuccess
  | IpatchPlayerFailed;

export const fetchPlayerRequest = (): TPlayerActions => ({
  type: GET_PLAYER_REQUEST,
});

export const fetchPlayerSuccess = (data: any): TPlayerActions => ({
  type: GET_PLAYER_SUCCESS,
  payload: { data },
});

export const fetchPlayerFailed = (error: {}): TPlayerActions => ({
  type: GET_PLAYER_FAILED,
  payload: { error },
});

export const patchPlayerRequest = (): TPlayerActions => ({
  type: PATCH_PLAYER_REQUEST,
});

export const patchPlayerSuccess = (data: any): TPlayerActions => ({
  type: PATCH_PLAYER_SUCCESS,
  payload: { data },
});

export const patchPlayerFailed = (error: {}): TPlayerActions => ({
  type: PATCH_PLAYER_FAILED,
  payload: { error },
});

export const getPlayer: AppThunk<Promise<IApplicationActions>> =
  (payload: string) => (dispatch: AppDispatch) => {
    dispatch(fetchPlayerRequest());
    return fetch(
      `${baseUrl}/participants/${payload}`,
      tokenRequestOptions("GET"),
    )
      .then(checkResponse)
      .then((json) => {
        dispatch(fetchPlayerSuccess(json));
        return json;
      })
      .catch((error) => dispatch(fetchPlayerFailed(error)));
  };
