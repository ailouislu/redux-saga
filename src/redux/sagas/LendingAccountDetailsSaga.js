import { call, put, takeLatest } from "redux-saga/effects";
import { getInterestRateType, getIsFixedRate } from "../../services/LendingAccountDetailsService";
import { GET_INTEREST_RATE_TYPE, GET_IS_FIXED_RATE, setInterestRateType, setIsFixedRate } from "../reducers/LendingAccountDetailsReducer";

function* handleGetInterestRateType() {
  try {
    const response = yield call(getInterestRateType);
    const data  = response;
    yield put(setInterestRateType(data));
  } catch (error) {
    console.log(error);
  }
}

function* handleGetIsFixedRate() {
  try {
    const response = yield call(getIsFixedRate);
    const data  = response;
    yield put(setIsFixedRate(data));
  } catch (error) {
    console.log(error);
  }
}

export function* LendingAccountDetailsSaga() {
  yield takeLatest(GET_IS_FIXED_RATE, handleGetIsFixedRate);
  yield takeLatest(GET_INTEREST_RATE_TYPE, handleGetInterestRateType);
}