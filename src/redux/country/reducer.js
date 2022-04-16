import { ADD_COUNTRY_SUCCESS } from "./action";

const initstate = {

  countries: ["INDIA","US"],
};

export const country_reducer = (state = initstate, { type, payload }) => {
  switch (type) {
    case ADD_COUNTRY_SUCCESS:
      return {
        ...state,
        countries: [...payload],
      };
    default:
        return state;
  }
};
