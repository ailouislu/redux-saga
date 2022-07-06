import { call, put } from "redux-saga/effects";
import { takeLatest } from "redux-saga/effects";
import { setUser } from "../reducers/userReducer";
import { requestGetUser } from "../../services/userService";
import { GET_USER } from "../reducers/userReducer";

function* handleGetUser() {
  try {
    const response = yield call(requestGetUser);
    const { data } = response;
    yield put(setUser(data));
  } catch (error) {
    console.log(error);
  }
}

export function* userSaga() {
  yield takeLatest(GET_USER, handleGetUser);
}