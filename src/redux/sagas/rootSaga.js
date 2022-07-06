import { LendingAccountDetailsSaga } from "./handlers/LendingAccountDetailsSaga";
import { userSaga } from "./handlers/user";


export function* rootSaga() {
  yield* LendingAccountDetailsSaga();
  yield* userSaga();
}
