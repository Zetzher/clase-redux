import { combineReducers } from "redux"; // helper method so you don't have to write your own root reducer
import location from "./location";
import theme from "./theme";

export default combineReducers({
  location,
  theme
});