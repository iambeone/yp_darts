import { SET_MODAL_OPEN } from "../actions/actionsTypes";
import { TCommonActions } from "../actions/commonActions";

export type TCommonState = {
  modalOpen: boolean;
};

const initialState = {
  modalOpen: false,
};

export const commonReducer = (
  state: TCommonState = initialState,
  action: TCommonActions,
) => {
  switch (action.type) {
    case SET_MODAL_OPEN:
      return {
        ...state,
        modalOpen: action.payload,
      };

    default:
      return state;
  }
};
