import {
  GET_PLAYERS_REQUEST,
  GET_PLAYERS_SUCCESS,
  GET_PLAYERS_FAILED,
  DELETE_PLAYER_REQUEST,
  DELETE_PLAYER_SUCCESS,
  DELETE_PLAYER_FAILED,
} from "../actions/actionsTypes";
import { TPlayersActions } from "../actions/playersActions";
import type { Tplayers } from "../types";

export type TPlayersState = {
  getAllRequest: boolean;
  getAllFailed: boolean;
  getAllSuccess: boolean;
  playersData: Tplayers[];
  deleteRequest: boolean;
  deleteFailed: boolean;
  deleteSuccess: boolean;
};

const initialState = {
  getAllRequest: false,
  getAllFailed: false,
  getAllSuccess: false,
  playersData: [],
  deleteRequest: false,
  deleteFailed: false,
  deleteSuccess: false,
};

export const playersReducer = (
  state: TPlayersState = initialState,
  action: TPlayersActions,
): TPlayersState => {
  switch (action.type) {
    case GET_PLAYERS_REQUEST: {
      return {
        ...state,
        getAllRequest: true,
        getAllFailed: false,
      };
    }

    case GET_PLAYERS_SUCCESS: {
      return {
        ...state,
        getAllFailed: false,
        getAllSuccess: true,
        playersData: action.payload.data,
      };
    }

    case GET_PLAYERS_FAILED: {
      return {
        ...state,
        getAllFailed: true,
        getAllRequest: false,
        getAllSuccess: false,
        playersData: [],
      };
    }

    case DELETE_PLAYER_REQUEST: {
      return {
        ...state,
        deleteRequest: true,
      };
    }

    case DELETE_PLAYER_SUCCESS: {
      return {
        ...state,
        deleteRequest: false,
        deleteSuccess: true,
      };
    }

    case DELETE_PLAYER_FAILED: {
      return {
        ...state,
        getAllFailed: true,
        getAllRequest: false,
        getAllSuccess: false,
      };
    }

    default:
      return state;
  }
};
