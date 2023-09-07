import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  user: null,
  token: null,
  posts: [],
  blogs:[],
  ques:[],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    setFriends: (state, action) => {
      if (state.user) {
        state.user.friends = action.payload.friends;
      } else {
        console.error("user friends non-existent :(");
      }
    },
    setPosts: (state, action) => {
      state.posts = action.payload.posts;
    },
    setPost: (state, action) => {
      const updatedPosts = state.posts.map((post) => {
        if (post._id === action.payload.post._id) return action.payload.post;
        return post;
      });
      state.posts = updatedPosts;
    },
    setBlogs: (state, action) => {
      state.blogs = action.payload.blogs;
    },
    setBlog: (state, action) => {
      const updatedBlogs = state.blogs.map((blog) => {
        if (blog._id === action.payload.blog._id) return action.payload.blog;
        return blog;
      });
      state.blogs = updatedBlogs;
    },
    setQues: (state, action) => {
      state.ques = action.payload.ques;
    },
    setQue: (state, action) => {
      const updatedQues = state.ques.map((que) => {
        if (que._id === action.payload.que._id) return action.payload.que;
        return que;
      });
      state.ques = updatedQues;
    },
  },
});

export const { setMode, setLogin, setLogout, setFriends, setPosts, setPost ,setBlog ,setBlogs ,setQue,setQues} =
  authSlice.actions;
export default authSlice.reducer;
