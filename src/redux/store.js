import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "./reducers/RootReducer";
import { rootSaga } from "./sagas/rootSaga";


const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(rootReducer, {}, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);

export default store;
