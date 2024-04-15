import { createContext, useReducer } from "react";
import PropTypes from "prop-types";

const DEFAULT_CONTEXT = {
  postList: [],
  addPost: () => {},
  deletePost: () => {},
};

export const PostList = createContext(DEFAULT_CONTEXT);

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = () => {};

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Welcome to my world",
    body: "O bella ciao bella ciao bella ciao ciao ciao",
    reactions: 5,
    userId: "user-7",
    tags: ["technology", "coding", "life"],
  },
  {
    id: "2",
    title: "chal nikal",
    body: "kya bolti public",
    reactions: 15,
    userId: "user-12",
    tags: ["one", "two", "three"],
  },
];

PostListProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PostListProvider;
