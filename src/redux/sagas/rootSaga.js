import { takeLatest } from "redux-saga/effects";
import { handleGetUser, handleGetIsFixedRate } from "./handlers/user";
import { GET_USER, GET_IS_FIXED_RATE } from "../ducks/user";

export function* watcherSaga() {
  yield takeLatest(GET_USER, handleGetUser);
  yield takeLatest(GET_IS_FIXED_RATE, handleGetIsFixedRate);
}
