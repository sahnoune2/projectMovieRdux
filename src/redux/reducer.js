import { ADDMOVIE, DELETE, EDIT, GETMOVIES } from "./actionType";

const initialState = {
  movies: [],
  loading: true,
  message: "",
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GETMOVIES:
      return {
        ...state,
        movies: payload.MoviesList,
        loading: false,
        message: payload.Msg,
      };

    default:
      return state;
  }
};

