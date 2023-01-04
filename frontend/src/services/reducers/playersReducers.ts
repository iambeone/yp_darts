import {
  GET_PLAYERS_REQUEST,
  GET_PLAYERS_SUCCESS,
  GET_PLAYERS_FAILED,
} from "../actions/actionsTypes";
import { TPlayersActions } from "../actions/playersActions";
import type { Tplayers } from "../types";

export type TPlayersState = {
  itemsRequest: boolean;
  itemsFailed: boolean;
  itemsSuccess: boolean;
  playersData: Tplayers[];
};

const initialState = {
  itemsRequest: false,
  itemsFailed: false,
  itemsSuccess: false,
  playersData: [],
};

export const playersReducer = (
  state: TPlayersState = initialState,
  action: TPlayersActions,
): TPlayersState => {
  switch (action.type) {
    case GET_PLAYERS_REQUEST: {
      return {
        ...state,
        itemsRequest: true,
        itemsFailed: false,
      };
    }

    case GET_PLAYERS_SUCCESS: {
      return {
        ...state,
        itemsFailed: false,
        itemsSuccess: true,
        playersData: action.payload.data,
      };
    }

    case GET_PLAYERS_FAILED: {
      return {
        ...state,
        itemsFailed: true,
        itemsRequest: false,
        itemsSuccess: false,
        playersData: [],
      };
    }

    default:
      return state;
  }
};
