import { ADDMOVIE, DELETE, EDIT } from "./actionType";

const initialState = {
  movies: [
    {
      id: 1,
      name: "Captain America: Brave New World",
      description:
        "Sam Wilson, now Captain America, uncovers a global conspiracy while facing off against a new threat involving President Thaddeus Ross, who transforms into the Red Hulk.",
      releaseDate: "February 14, 2025",
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE7vzaB-s3FhliaRfVRBhZ3mxqkUCga2jxQA&s",
      trailer: "https://www.youtube.com/embed/1pHDWnXmK7Y?si=9fn9Rr1gvmxquCNd",
      rating: 6,
    },

    {
      id: 2,
      name: "Snow White",
      description:
        "A live-action reimagining of the classic Disney tale, starring Rachel Zegler as Snow White and Gal Gadot as the Evil Queen, blending music and magic.",
      releaseDate: "March 21, 2025",
      poster:
        "https://snowwhitemuseum.com/wp-content/uploads/2025/01/Snow-White-2025-vignette.jpg",
      trailer: "https://www.youtube.com/embed/iV46TJKL8cU?si=DS8zozkB_t5BFk4d",
      rating: 4,
    },
  ],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADDMOVIE:
      return { ...state, movies: [...state.movies, payload] };

    case DELETE:
      return {
        ...state,
        movies: state.movies.filter((el) => el.id !== payload),
      };

    case EDIT:
      return {
        ...state,
        movies: state.movies.map((el) =>
          el.id === payload.id ? { ...el, ...payload.data } : el
        ),
      };

    default:
      return state;
  }
};
