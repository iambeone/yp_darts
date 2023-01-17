import {
  GET_PLAYERS_REQUEST,
  GET_PLAYERS_SUCCESS,
  GET_PLAYERS_FAILED,
  SET_SEARCH,
  DELETE_PLAYER_REQUEST,
  DELETE_PLAYER_SUCCESS,
  DELETE_PLAYER_FAILED,
  PATCH_PLAYER_REQUEST,
  PATCH_PLAYER_SUCCESS,
  PATCH_PLAYER_FAILED,
  SET_CURRENT_PLAYER_ID,
  SET_ACCEPT_DELETE_OPEN,
  SET_CONFIRM_DELETE_OPEN,
  SET_CONTEXT_MENU_OPEN,
} from "../actions/actionsTypes";
import { TPlayersActions } from "../actions/playersActions";
import type { Tplayers } from "../types";

export type TPlayersState = {
  [x: string]: any;
  getAllRequest: boolean;
  getAllFailed: boolean;
  getAllSuccess: boolean;
  playersData: Tplayers[];
  filteredPlayersData: Tplayers[];
  search: string;
  deleteRequest: boolean;
  deleteFailed: boolean;
  deleteSuccess: boolean;
  currentPlayerId: number;
  playerReq: boolean;
  playerSuccess: boolean;
  playerFailed: boolean;
  player: any; // Tplayer
  acceptDeleteOpen: boolean;
  confirmDeleteOpen: boolean;
  contextMenuOpen: HTMLButtonElement | null;
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
  currentPlayerId: 0,
  playerReq: false,
  playerSuccess: false,
  playerFailed: false,
  player: [],
  acceptDeleteOpen: false,
  confirmDeleteOpen: false,
  contextMenuOpen: null,
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

    case SET_CURRENT_PLAYER_ID: {
      return {
        ...state,
        currentPlayerId: action.payload.id,
      };
    }

    case PATCH_PLAYER_REQUEST: {
      return {
        ...state,
        playerReq: true,
        playerFailed: false,
      };
    }

    case PATCH_PLAYER_SUCCESS: {
      return {
        ...state,
        playerReq: false,
        playerSuccess: true,
        playerFailed: false,
        player: action.payload.data,
        currentPlayerId: action.payload.data.id,
      };
    }

    case PATCH_PLAYER_FAILED: {
      return {
        ...state,
        playerFailed: true,
        playerReq: false,
        playerSuccess: false,
        player: [],
      };
    }

    case SET_ACCEPT_DELETE_OPEN:
      return {
        ...state,
        acceptDeleteOpen: action.payload,
      };

    case SET_CONFIRM_DELETE_OPEN:
      return {
        ...state,
        confirmDeleteOpen: action.payload,
      };

    case SET_CONTEXT_MENU_OPEN:
      return {
        ...state,
        contextMenuOpen: action.payload.anchor,
      };

    default:
      return state;
  }
};
