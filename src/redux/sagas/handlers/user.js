import { call, put } from "redux-saga/effects";
import { setUser, setIsFixedRate } from "../../ducks/user";
import { requestGetUser, requestGetIsFixedRate } from "../requests/user";

export function* handleGetUser(action) {
  try {
    const response = yield call(requestGetUser);
    const { data } = response;
    yield put(setUser(data));
  } catch (error) {
    console.log(error);
  }
}

export function* handleGetIsFixedRate(action) {
  try {
    const response = yield call(requestGetIsFixedRate);
    yield put(setIsFixedRate(response));
  } catch (error) {
    console.log(error);
  }
}