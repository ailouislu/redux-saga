import { combineReducers } from "redux";
import {reducer as counter}  from "./counterReducer";
import {reducer as LendingAccountDetails} from "./LendingAccountDetailsReducer";
import {reducer as user}  from "./userReducer";

export const rootReducer = combineReducers({
  counter,
  user,
  LendingAccountDetails,
});