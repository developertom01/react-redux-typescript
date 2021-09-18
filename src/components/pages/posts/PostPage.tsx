import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Post } from "../../../models/posts_model";
import { fetchPosts } from "../../../state_manager/actions/posts_actions";
import { AppDispatch, RootState } from "../../../state_manager/store";
const PostsPage: React.FC = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state: RootState) => state.posts);
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  return posts.loading ? (
    <p>Loading</p>
  ) : (
    <div>
      {posts.data.length === 0 ? (
        <p> No data </p>
      ) : (
        posts.data.map((post: Post) => (
          <div key={post.id}>
            <h4>{post.title} </h4>
            <p>{post.body}</p>
            <small>{post.userId}</small>
          </div>
        ))
      )}
    </div>
  );
};
export default PostsPage;
