import { combineReducers, createStore } from "redux";
import { city_reducer } from "./city/reducer";
import { country_reducer } from "./country/reducer";

const rootreducer = combineReducers({
  city: city_reducer,
  country: country_reducer,
});

export const store = createStore(
  rootreducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
