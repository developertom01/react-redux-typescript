import { applyMiddleware, createStore, Store } from "redux";
import thunk from "redux-thunk";
import RootReducer from "./root_reducer";

const reduxStore: Store = createStore(RootReducer, {}, applyMiddleware(thunk));
export type RootState = ReturnType<typeof RootReducer>;
export type AppDispatch = typeof reduxStore.dispatch;
export default reduxStore;
