import { LendingAccountDetailsSaga } from "./LendingAccountDetailsSaga";
import { userSaga } from "./userSaga";


export function* rootSaga() {
  yield* LendingAccountDetailsSaga();
  yield* userSaga();
}
