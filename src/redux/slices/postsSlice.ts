import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostType } from "../../components/Post";

type postsSliceState = {
  posts: PostType[];
}

const initialState: postsSliceState = {
  posts: [],
}

function generateEvaluation() {
  return {
    state: false,
    counter: Math.floor(Math.random() * (50 - 0 + 1) + 0)
  }
}

export function addEvaluationsToPosts(arr: PostType[]) {
  arr.forEach((post: PostType) => {
    post.likes = generateEvaluation()
    post.dislikes = generateEvaluation()
  });
  return arr
}

export const fetchPosts = createAsyncThunk("posts/fetchStatus", async (value?: string) => {
  if(value) {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts?title=" + value)
    const posts = await response.json()
    return addEvaluationsToPosts(posts)

  } else {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts = await response.json()
    return addEvaluationsToPosts(posts)
  }
})



// с помощью adapter переделывать не стал, т.к. если честно пока не знаком с ним.
export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setEvaluation(state, { payload }: PayloadAction<{id: number, type: "likes" | "dislikes", typeTo: "likes" | "dislikes"}>) {
      const post = state.posts.find(item => {
        if(item.id === payload.id) {
          return true
        } else {
          return false
        }
      })
      if(post) {
        if(post[payload.type].state) {
          post[payload.type].state = false
          post[payload.type].counter -= 1
        } else {
          if(post[payload.typeTo].state) {
            post[payload.typeTo].counter -= 1
            post[payload.typeTo].state = false
          }
          post[payload.type].state = true
          post[payload.type].counter += 1
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, { payload }) => {
      state.posts = payload
    })
  }
})

export const { setEvaluation } = postsSlice.actions

export default postsSlice.reducer