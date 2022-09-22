import { combineReducers } from "redux";
import users from "./User/reducer";

const rootReducer = combineReducers({
  userReducer: users
})

export default rootReducer;