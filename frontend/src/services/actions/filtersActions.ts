import {
  SET_GENDER,
  SET_AGE,
  SET_SUBJECT_RF,
  SET_NAME,
  APPLY_FILTERS,
  CLEAR_FILTERS,
  DELETE_FILTER,
} from "./actionsTypes";

export interface ISetGender {
  readonly type: typeof SET_GENDER;
  readonly payload: string;
}

export interface ISetAge {
  readonly type: typeof SET_AGE;
  readonly payload: string;
}

export interface ISetSubjectRF {
  readonly type: typeof SET_SUBJECT_RF;
  readonly payload: string;
}

export interface ISetName {
  readonly type: typeof SET_NAME;
  readonly payload: string;
}

export interface IApplyFilters {
  readonly type: typeof APPLY_FILTERS;
}

export interface IDeleteFilter {
  readonly type: typeof DELETE_FILTER;
  readonly payload: string;
}

export interface IClearFilters {
  readonly type: typeof CLEAR_FILTERS;
}

export type TFiltersActions =
  | ISetGender
  | ISetAge
  | ISetSubjectRF
  | ISetName
  | IApplyFilters
  | IDeleteFilter
  | IClearFilters;

export const setGender = (payload: string): ISetGender => ({
  type: SET_GENDER,
  payload,
});

export const setAge = (payload: string): ISetAge => ({
  type: SET_AGE,
  payload,
});

export const setSubjectRF = (payload: string): ISetSubjectRF => ({
  type: SET_SUBJECT_RF,
  payload,
});

export const setName = (payload: string): ISetName => ({
  type: SET_NAME,
  payload,
});

export const applyFilters = (): IApplyFilters => ({
  type: APPLY_FILTERS,
});

export const deleteFilter = (payload: string): IDeleteFilter => ({
  type: DELETE_FILTER,
  payload,
});

export const clearFilters = (): IClearFilters => ({
  type: CLEAR_FILTERS,
});
