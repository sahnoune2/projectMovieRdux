const initialState = {
  users: [],
  loading: true,
  message: "",
};

export const reducerUser = (state = initialState, { type, payload }) => {
  switch (type) {
    case "":
      return { ...state, ...payload };

    default:
      return state;
  }
};

//rxreducer
