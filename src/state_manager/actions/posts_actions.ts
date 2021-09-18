import axios, { AxiosResponse } from "axios";
import { Dispatch } from "react";
import { Alert } from "rsuite";
import { Post, PostConvert } from "../../models/posts_model";
import Endpoints from "../../utils/endpoints";
import PostsActionCreators from "../action_creators/posts_action_creators";

export interface PostsAction {
  type: PostsActionCreators;
  payload?: Post[];
}

export const getPostsRequests = (): PostsAction => {
  return {
    type: PostsActionCreators.REQUEST
  };
};

export const getPostsSucess = (posts: Post[]): PostsAction => {
  return {
    type: PostsActionCreators.SUCCESS,
    payload: posts
  };
};

export const getPostsFailed = (): PostsAction => {
  return {
    type: PostsActionCreators.FAILED
  };
};

export const fetchPosts = () => (dispatch: Dispatch<PostsAction>) => {
  dispatch(getPostsRequests());
  axios
    .get(Endpoints.postsUrl)
    .then((res: AxiosResponse<any>) => {
      // const posts: Post[] = PostConvert.toPost(res.data);
      dispatch(getPostsSucess(res.data));
    })
    .catch((err) => {
      console.log(err);
      Alert.error("AN error");
      dispatch(getPostsFailed());
    });
};
