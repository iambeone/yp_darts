import {
  SET_GENDER,
  SET_AGE,
  SET_SUBJECT_RF,
  SET_SEARCH,
  APPLY_FILTERS,
  DELETE_FILTER,
  CLEAR_FILTERS,
} from "../actions/actionsTypes";
import { subjectsRF } from "../../utils/constants";
import { TFiltersActions } from "../actions/filtersActions";

export type TFiltersState = {
  gender: string;
  chipGender: {
    [index: string]: string;
  };
  age: string;
  chipAge: {
    [index: string]: string;
  };
  subjectRF: string;
  search: string;
  buttonText: string;
  appliedFilters: string[];
};

const initialState = {
  gender: "",
  chipGender: {
    male: "Мужчины",
    female: "Женщины",
  },
  age: "",
  chipAge: {
    children: "До 15 лет",
    teenagers: "Юниоры",
    grownups: "Взрослые",
  },
  subjectRF: "",
  search: "",
  buttonText: "Закрыть",
  appliedFilters: [],
};

export const filtersReducer = (
  state: TFiltersState = initialState,
  action: TFiltersActions,
) => {
  switch (action.type) {
    case SET_GENDER:
      return {
        ...state,
        gender: action.payload,
        buttonText: "Применить",
      };

    case SET_AGE:
      return {
        ...state,
        age: action.payload,
        buttonText: "Применить",
      };

    case SET_SUBJECT_RF:
      return {
        ...state,
        subjectRF: action.payload,
        buttonText: "Применить",
      };

    case SET_SEARCH:
      return {
        ...state,
        search: action.payload,
      };

    case APPLY_FILTERS:
      return {
        ...state,
        appliedFilters: [
          state.chipGender[state.gender],
          state.chipAge[state.age],
          state.subjectRF,
        ].filter((el) => el),
      };

    case DELETE_FILTER:
      return {
        ...state,
        gender: ["Мужчины", "Женщины"].includes(action.payload)
          ? ""
          : state.gender,
        age: ["До 15 лет", "Юниоры", "Взрослые"].includes(action.payload)
          ? ""
          : state.age,
        subjectRF: subjectsRF.map((el) => el.title).includes(action.payload)
          ? ""
          : state.subjectRF,
        buttonText: state.appliedFilters.length > 1 ? "Применить" : "Закрыть",
        appliedFilters: state.appliedFilters.filter(
          (el) => el !== action.payload,
        ),
      };

    case CLEAR_FILTERS:
      return {
        ...state,
        gender: "",
        age: "",
        subjectRF: "",
        buttonText: "Закрыть",
        appliedFilters: [],
      };

    default:
      return state;
  }
};
