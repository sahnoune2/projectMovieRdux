import { ADDMOVIE, DELETE, EDIT } from "./actionType";

export const addMovie = (newTask) => {
  return { type: ADDMOVIE, payload: newTask };
};

export const deleteMovie = (id) => {
  return { type: DELETE, payload: id };
};

export const editMovie = (id, data) => {
  return { type: EDIT, payload: { id, data } };
};
