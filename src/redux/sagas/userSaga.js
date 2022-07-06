import { call, put, takeLatest } from "redux-saga/effects";
import { requestGetUser } from "../../services/userService";
import { GET_USER, setUser } from "../reducers/userReducer";

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