import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import reduxImmutableStateImvariant from "redux-immutable-state-invariant";

export default function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // добавляет поддержку Redux dev tools

  return createStore(
    rootReducer,
    initialState,
    /* этот миддлвейр вредупредит если мы случайно изменим Redux state */
    composeEnhancers(applyMiddleware(reduxImmutableStateImvariant()))
  );
}
