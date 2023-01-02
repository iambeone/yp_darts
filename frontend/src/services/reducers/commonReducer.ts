import { SET_FILTERS_MODAL_OPEN } from "../actions/actionsTypes";
import { TCommonActions } from "../actions/commonActions";

export type TCommonState = {
  filtersModalOpen: boolean;
};

const initialState = {
  filtersModalOpen: false,
};

export const commonReducer = (
  state: TCommonState = initialState,
  action: TCommonActions,
) => {
  switch (action.type) {
    case SET_FILTERS_MODAL_OPEN:
      return {
        ...state,
        filtersModalOpen: action.payload,
      };

    default:
      return state;
  }
};
