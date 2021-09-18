import { combineReducers } from "redux";
import postsReducer from "./reducers/posts_reducer";

const RootReducer = combineReducers({
  posts: postsReducer
});

export default RootReducer;
