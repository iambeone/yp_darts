import {
  SET_MODAL_OPEN,
  SET_CONTEXT_MENU_OPEN,
  SET_CONTEXT_MENU_CLOSE,
} from "./actionsTypes";
import type { TContextMenuProps } from "../types";

export interface ISetModalOpen {
  readonly type: typeof SET_MODAL_OPEN;
  readonly payload: boolean;
}

export interface ISetContextMenuOpen {
  readonly type: typeof SET_CONTEXT_MENU_OPEN;
  readonly payload: { data: TContextMenuProps[] };
}

export interface ISetContextMenuClose {
  readonly type: typeof SET_CONTEXT_MENU_CLOSE;
}

export type TCommonActions =
  | ISetModalOpen
  | ISetContextMenuOpen
  | ISetContextMenuClose;

export const setModalOpen = (payload: boolean): ISetModalOpen => ({
  type: SET_MODAL_OPEN,
  payload,
});

export const setContextMenuOpen = (
  data: TContextMenuProps[],
): ISetContextMenuOpen => ({
  type: SET_CONTEXT_MENU_OPEN,
  payload: { data },
});

export const setContextMenuClose = (): ISetContextMenuClose => ({
  type: SET_CONTEXT_MENU_CLOSE,
});
