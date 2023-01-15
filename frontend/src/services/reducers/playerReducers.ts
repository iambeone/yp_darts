import {
  GET_PLAYER_REQUEST,
  GET_PLAYER_SUCCESS,
  GET_PLAYER_FAILED,
} from "../actions/actionsTypes";
import { TPlayerActions } from "../actions/playerActions";

export type TPlayerState = {
  itemsRequest: boolean;
  itemsFailed: boolean;
  itemsSuccess: boolean;
  playerData: any;
};

const initialState = {
  itemsRequest: false,
  itemsFailed: false,
  itemsSuccess: false,
  playerData: {},
};

export const playerReducer = (
  state: TPlayerState = initialState,
  action: TPlayerActions,
): TPlayerState => {
  switch (action.type) {
    case GET_PLAYER_REQUEST: {
      return {
        ...state,
        itemsRequest: true,
        itemsFailed: false,
      };
    }

    case GET_PLAYER_SUCCESS: {
      return {
        ...state,
        itemsFailed: false,
        itemsSuccess: true,
        playerData: action.payload.data,
      };
    }

    case GET_PLAYER_FAILED: {
      return {
        ...state,
        itemsFailed: true,
        itemsRequest: false,
        itemsSuccess: false,
        playerData: {},
      };
    }

    default:
      return state;
  }
};
