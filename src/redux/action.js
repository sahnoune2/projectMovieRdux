import axios from "axios";
import { ADDMOVIE, DELETE, EDIT, GETMOVIES } from "./actionType";

export const getMovies = () => async (seif) => {
  try {
    const response = await axios.get("http://localhost:5000/movieslist");
    console.log(response);
    seif({ type: GETMOVIES, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const addMovie = (newMovie) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/addmovie",
      newMovie
    );
    console.log(response.data);
    dispatch(getMovies());
  } catch (error) {
    console.log(error);
  }
};

export const deleteMovie = (id) => async (dispatch) => {
  try {
    const response = await axios.delete(
      `http://localhost:5000/deleteonemovie/${id}`
    );
    console.log(response);
    dispatch(getMovies());
  } catch (error) {
    console.log(error);
  }
};

export const editMovie = (id, data) => async (dispatch) => {
  try {
    const response = await axios.put(
      `http://localhost:5000/editmovie/${id}`,
      data
    );
    console.log(response);
    dispatch(getMovies());
  } catch (error) {
    console.log(error);
  }
};
