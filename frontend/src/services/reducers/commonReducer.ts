import {
  SET_MODAL_OPEN,
  SET_CONTEXT_MENU_OPEN,
  SET_CONTEXT_MENU_CLOSE,
} from "../actions/actionsTypes";
import { TCommonActions } from "../actions/commonActions";
import type { TContextMenuProps } from "../types";

export type TCommonState = {
  modalOpen: boolean;
  contextMenuOpen: boolean;
  contextMenuData: TContextMenuProps | null;
};

const initialState = {
  modalOpen: false,
  contextMenuOpen: false,
  contextMenuData: null,
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

    case SET_CONTEXT_MENU_OPEN:
      return {
        ...state,
        contextMenuOpen: true,
        contextMenuData: action.payload.data,
      };

    case SET_CONTEXT_MENU_CLOSE:
      return {
        ...state,
        contextMenuOpen: false,
        contextMenuData: null,
      };

    default:
      return state;
  }
};
