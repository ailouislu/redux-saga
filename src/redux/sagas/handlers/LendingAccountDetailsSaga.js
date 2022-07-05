import { call, put } from "redux-saga/effects";
import { setInterestRateType, setIsFixedRate } from "../../ducks/LendingAccountDetails";
import { getInterestRateType, getIsFixedRate } from "../requests/LendingAccountDetailsService";

export function* handleGetInterestRateType(action) {
  try {
    const response = yield call(getInterestRateType);
    const data  = response;
    yield put(setInterestRateType(data));
  } catch (error) {
    console.log(error);
  }
}

export function* handleGetIsFixedRate(action) {
  try {
    const response = yield call(getIsFixedRate);
    const data  = response;
    yield put(setIsFixedRate(data));
  } catch (error) {
    console.log(error);
  }
}