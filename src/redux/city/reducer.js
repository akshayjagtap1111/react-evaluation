import { ADD_CITY_FAILURE, ADD_CITY_SUCCESS, DELETE_CITY } from "./action";

const initstate = {
  error: false,
  city: [],
};

export const city_reducer = (state = initstate, { type, payload }) => {
  switch (type) {
    case ADD_CITY_SUCCESS:
      return { ...state, city: [...state.city, payload] };

    case ADD_CITY_FAILURE:
      return { ...state, error: true };

    case DELETE_CITY:
      const cities = state.city.filter((ct) => ct.id === payload);

      return { ...state, city: [...cities] };
    default:
      return state;
  }
};
