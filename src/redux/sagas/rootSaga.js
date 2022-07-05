import { takeLatest } from "redux-saga/effects";
import { handleGetUser } from "./handlers/user";
import { handleGetInterestRateType, handleGetIsFixedRate } from "./handlers/LendingAccountDetailsSaga";
import { GET_USER } from "../ducks/user";
import { GET_INTEREST_RATE_TYPE,GET_IS_FIXED_RATE } from "../ducks/LendingAccountDetails";


export function* watcherSaga() {
  yield takeLatest(GET_USER, handleGetUser);
  yield takeLatest(GET_IS_FIXED_RATE, handleGetIsFixedRate);
  yield takeLatest(GET_INTEREST_RATE_TYPE, handleGetInterestRateType);
}
