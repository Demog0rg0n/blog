import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { PostType } from "../../components/Post";


type postsSliceState = {
  posts: PostType[];
}

const initialState: postsSliceState = {
  posts: [],
}

export const fetchPosts = createAsyncThunk("posts/fetchStatus", async (value?: string) => {
  try{
    if(value) {
      const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts?title=" + value)
  
      data.forEach((post: PostType) => {
        post.likes = {
          state: false,
          counter: Math.floor(Math.random() * (50 - 0 + 1) + 0)
        }
        post.dislikes = {
          state: false,
          counter: Math.floor(Math.random() * (50 - 0 + 1) + 0)
        }
      });
      return data
    } else {
      const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts")
  
      data.forEach((post: PostType) => {
        post.likes = {
          state: false,
          counter: Math.floor(Math.random() * (50 - 0 + 1) + 0)
        }
        post.dislikes = {
          state: false,
          counter: Math.floor(Math.random() * (50 - 0 + 1) + 0)
        }
      });
      return data
    }

  } catch(e) {
    console.log(e)
  }
})



export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setLike(state, {payload}: PayloadAction<number>) {
      const post = state.posts.find(item => {
        if(item.id === payload) {
          return true
        }
      })
      if(post) {
        if(post.likes.state) {
          post.likes.state = false
          post.likes.counter -= 1
        } else {
          if(post.dislikes.state) {
            post.dislikes.counter -= 1
            post.dislikes.state = false
          }
          post.likes.state = true
          post.likes.counter += 1
        }
      }
    },
    setDislike(state, {payload}: PayloadAction<number>) {
      const post = state.posts.find(item => {
        if(item.id === payload) {
          return true
        }
      })
      if(post) {
        if(post.dislikes.state) {
          post.dislikes.state = false
          post.dislikes.counter -= 1
        } else {
          if(post.likes.state) {
            post.likes.counter -= 1
            post.likes.state = false
          }
          post.dislikes.state = true
          post.dislikes.counter += 1
        }
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, { payload }) => {
      state.posts = payload
    })
  }
})

export const { setDislike, setLike } = postsSlice.actions

export default postsSlice.reducer