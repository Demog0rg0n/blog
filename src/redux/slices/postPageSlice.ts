import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { PostType } from "../../components/Post";


type postsSliceState = {
  post: PostType | undefined;
}

const initialState: postsSliceState = {
  post: undefined,
}



export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPost(state, {payload}: PayloadAction<PostType>) {
        state.post = payload
    },
  },
})

export const { setPost } = postsSlice.actions

export default postsSlice.reducer