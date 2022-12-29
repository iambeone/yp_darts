import { SET_FILTERS_MODAL_OPEN } from "./actionsTypes";

export interface ISetModalOpen {
  readonly type: typeof SET_FILTERS_MODAL_OPEN;
  readonly payload: boolean;
}

export type TCommonActions = ISetModalOpen;

export const setModalOpen = (payload: boolean): ISetModalOpen => ({
  type: SET_FILTERS_MODAL_OPEN,
  payload,
});
