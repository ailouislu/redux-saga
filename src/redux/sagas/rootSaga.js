import { lendingAccountDetailsSaga } from "./LendingAccountDetailsSaga";
import { userSaga } from "./userSaga";


export function* rootSaga() {
  yield* lendingAccountDetailsSaga();
  yield* userSaga();
}
