import { Post } from "../../models/posts_model";
import { PostsAction } from "../actions/posts_actions";
import PostsActionCreators from "../action_creators/posts_action_creators";

interface PostsInital {
  loading: boolean;
  data: Post[];
}

const initState: PostsInital = {
  loading: false,
  data: []
};

const postsReducer = (state: PostsInital = initState, action: PostsAction) => {
  const { type, payload } = action;
  switch (type) {
    case PostsActionCreators.REQUEST:
      return {
        ...state,
        loading: true
      };
    case PostsActionCreators.SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload
      };
    case PostsActionCreators.FAILED:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};

export default postsReducer;
