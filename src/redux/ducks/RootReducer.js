import { combineReducers } from "redux";
import {reducer as counter}  from "./counter";
import {reducer as LendingAccountDetails} from "./LendingAccountDetails";
import {reducer as user}  from "./user";

export const rootReducer = combineReducers({
  counter,
  user,
  LendingAccountDetails,
});