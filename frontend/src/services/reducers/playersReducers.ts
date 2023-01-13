import {
  GET_PLAYERS_REQUEST,
  GET_PLAYERS_SUCCESS,
  GET_PLAYERS_FAILED,
  SET_SEARCH,
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
  filteredPlayersData: Tplayers[];
  search: string;
  deleteRequest: boolean;
  deleteFailed: boolean;
  deleteSuccess: boolean;
};

const initialState = {
  getAllRequest: false,
  getAllFailed: false,
  getAllSuccess: false,
  playersData: [],
  filteredPlayersData: [],
  search: "",
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
        filteredPlayersData: action.payload.data,
      };
    }

    case GET_PLAYERS_FAILED: {
      return {
        ...state,
        getAllFailed: true,
        getAllRequest: false,
        getAllSuccess: false,
        playersData: [],
        filteredPlayersData: [],
      };
    }

    case SET_SEARCH:
      return {
        ...state,
        search: action.payload,
        filteredPlayersData: [...state.playersData].filter(
          (player: Tplayers) =>
            player.surname.toLowerCase().includes(action.payload) ||
            player.name.toLowerCase().includes(action.payload) ||
            player.email.toLowerCase().includes(action.payload),
        ),
      };

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
