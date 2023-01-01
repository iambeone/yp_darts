import {
  GET_PLAYERS_REQUEST,
  GET_PLAYERS_SUCCESS,
  GET_PLAYERS_FAILED,
} from "../actions/actionsTypes";
import { IApplicationActions } from "../actions";
import type { Tplayers } from "../types";

export type TPlayersState = {
  itemsRequest: boolean;
  itemsFailed: boolean;
  playersData: Tplayers[];
};

const initialState = {
  itemsRequest: false,
  itemsFailed: false,
  playersData: [],
};

export const playersReducer = (
  state: TPlayersState = initialState,
  action: IApplicationActions,
) => {
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
        playersData: action.payload.data,
        response: true,
        itemsRequest: false,
      };
    }

    case GET_PLAYERS_FAILED: {
      return {
        ...state,
        itemsFailed: true,
        itemsRequest: false,
        playersData: null,
      };
    }

    default:
      return state;
  }
};
